const { usersOrders } = require("express");
const pool = require("./databank");

const router = Router();

router.get("/user", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * from users");
    res.json({ data: rows });
  } catch (err) {
    res.sendStatus(500);
  }
});

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE id=$1;", [id]);
    res.json({ data: rows });
  } catch (e) {
    res.sendStatus(404);
  }
});

router.post("/user", async (req, res) => {
  const { firstname, lastname, age } = req.body;
  try {
    const { rows } = await pool.query(
      "INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *",
      [firstname, lastname, age]
    );
    res.json({ data: rows });
  } catch (e) {
    res.sendStatus(403);
  }
  res.end();
});

router.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { firstname } = req.body;
  try {
    const { rows } = await pool.query(
      "UPDATE users SET first_name=$1 WHERE id=$2 RETURNING *",
      [firstname, id]
    );
    res.json({ data: rows });
  } catch (e) {
    res.sendStatus(403);
  }
});

router.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query("DELETE FROM users WHERE id=$1", [id]);
    res.json({ message: `user with id${id} deleted` });
  } catch (err) {
    res.sendStatus(404);
  }
});

module.exports = router;
