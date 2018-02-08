const express = require('express')
const app = express()
const db = require('../db/movies.json')

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/db', function (req, res) {
  res.send(db)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
