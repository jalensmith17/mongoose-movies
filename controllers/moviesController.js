const Movie = require('../models/movie')


/*

// POST
router.post('/', movieCtrl.create)
// GET
router.get('/', movieCtrl.index)
// GET
router.get('/:id', movieCtrl.show)
// POST
router.get('/:movieId/performers/:performerId', movieCtrl.addPerformer)

*/

exports.create = async function create(req, res) {
    try {
        const createdMovie = await Movie.create(req.body)
        res.status(200).json(createdMovie)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.index = async function index(req, res) {
    try {
        const foundMovies = await Movie.find({})
        res.status(200).json(foundMovies)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.show = async function show(req, res) {
    try {
        const foundMovie = await Movie.findOne({ _id: req.params.id })
        res.status(200).json(foundMovie)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

exports.addPerformer = async function addPerformer(req, res) {
    
}