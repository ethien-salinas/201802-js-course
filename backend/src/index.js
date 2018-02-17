const express = require('express')
const app = express()
const dbFunctions = require('./db_functions')
const PORT = 4000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/movies', (req, res) => {
  res.send(dbFunctions.getAll())
})

app.get('/movies/:movieId', (req, res) => {
  res.send(dbFunctions.getElementById(req.params.movieId))
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
