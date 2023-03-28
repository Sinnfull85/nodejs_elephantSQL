const express = require('express')
const app = express()
const router = require("./users", "./orders")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('Haaallllloooo Welt!!!')
})

app.use("/api", orders)
app.use("/api", users)

module.exports = app;

