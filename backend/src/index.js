const express = require('express')
const app = express()
const db = require('../db/movies.json')
const dbFunctions = require('./db_functions')
const PORT = 4000

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/movies', function (req, res) {
  res.send(dbFunctions.getAll())
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
