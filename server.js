const express = require('express')
const app = express()
const router = require("./users")
const router2 = require("./orders")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Haaallllloooo Welt!!!')
})

app.use("/api", router)
app.use("/api", router2)

module.exports = app;

