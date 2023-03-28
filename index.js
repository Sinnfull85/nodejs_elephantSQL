const app = require("./server")
const port = 5050
require("dotenv").config();


app.listen(port, () => {
    console.log(`This app listening on port ${port}`)
  })