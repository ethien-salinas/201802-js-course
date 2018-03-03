const express = require('express')
const app = express()
const dbFunctions = require('./db_functions')
const index = require('./routes/index')
const movies = require('./routes/movies')

const PORT = 4000

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', index)
app.use('/movies', movies)


app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
