const express = require('express')
const router = express.Router()
let moment = require('moment-timezone')

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log(`[root] Time: ${moment().tz('America/Mexico_City').format()}`)
  next()
})

router.get('/', (req, res) => {
  res.send('REST API v1')
})

module.exports = router
