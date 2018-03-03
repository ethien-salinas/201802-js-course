const express = require('express')
const router = express.Router()
const dbFunctions = require('../db_functions')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('[movies] Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  res.send(dbFunctions.getAll())
})

router.get('/:movieId', (req, res) => {
  res.send(dbFunctions.getElementById(req.params.movieId))
})

module.exports = router
