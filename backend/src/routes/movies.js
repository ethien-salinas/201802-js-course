const express = require('express')
const router = express.Router()
const dbFunctions = require('../db_functions')
let moment = require('moment-timezone')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log(`[movies] Time: ${moment().tz('America/Mexico_City').format()}`)
  next()
})

router.get('/', async (req, res) => {
  if (req.query.page_offset && req.query.page_limit) {
    res.send(await dbFunctions.getElementsFromTo(
      req.query.page_offset,
      req.query.page_limit
    ))
  } else {
    res.send(dbFunctions.getAll())
  }
})

router.get('/paginator', async (req, res) => {
  const offset = parseInt(req.query.page_offset, 10) || 0
  const limit = parseInt(req.query.page_limit, 10) || 10
  const db_size = await dbFunctions.getSize()
  const last_offset = Math.floor(db_size / limit) * limit
  const fullURL = req.protocol + '://' + req.get('host');
  let response = {}
  response.links = {
    first: `${fullURL}/movies/paginator?page_offset=${0}&page_limit=${limit}`,
    last: `${fullURL}/movies/paginator?page_offset=${last_offset}&page_limit=${limit}`,
    prev: (offset - limit) < 0 ? null : `${fullURL}/movies/paginator?page_offset=${offset - limit}&page_limit=${limit}`,
    next: (offset + limit) > db_size ? null : `${fullURL}/movies/paginator?page_offset=${offset + limit}&page_limit=${limit}`
  }
  response.data = await dbFunctions.getElementsFromTo(offset, offset + limit)
  res.send(response)
})

router.get('/:movieId', (req, res) => {
  res.send(dbFunctions.getElementById(req.params.movieId))
})

module.exports = router
