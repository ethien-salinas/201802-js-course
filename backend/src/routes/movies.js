const express = require('express')
const router = express.Router()
const dbFunctions = require('../db_functions')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('[movies] Time: ', Date.now())
  next()
})

router.get('/', async (req, res) => {
  //const offset = req.query.page_offset || 0
  //const limit = req.query.page_limit || 5
  if(req.query.page_offset && req.query.page_limit){
    res.send(await dbFunctions.getElementsFromTo(
      req.query.page_offset,
      req.query.page_limit
    ))  
  }else{
    res.send(dbFunctions.getAll())
  }
})

router.get('/:movieId', (req, res) => {
  res.send(dbFunctions.getElementById(req.params.movieId))
})

module.exports = router
