const express = require('express')
const router = express.Router()
const performerCtrl = require('.../controllers/performersController')

// GET
router.get('/', performerCtrl.index)
// POST
router.post('/', performerCtrl.create)
// POST
router.post(':/performerId/movies/:movieId', performerCtrl.addPerformer)


module.exports = router