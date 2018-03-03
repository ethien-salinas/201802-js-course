const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('[root] Time: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  res.send('REST API v1')
})

module.exports = router
