const express = require('express')
const app = express()
const router = require("./usersRouter")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Haaallllloooo Welt!!!')
})

app.use("/api", router)

module.exports = app;

