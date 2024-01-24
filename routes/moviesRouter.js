const express = require('express')
const router = express.Router()
const movieCtrl = require('../controllers/moviesController')

// POST
router.post('/', movieCtrl.create)
// GET
router.get('/', movieCtrl.index)
// GET
router.get('/:id', movieCtrl.show)
// POST
router.get('/:movieId/performers/:performerId', movieCtrl.addPerformer)


module.exports = router