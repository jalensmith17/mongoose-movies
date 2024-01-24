const Movie = require('../models/movie')
const Performer = require('/../models/performer')

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
    try {
        const foundPerformer = await Performer.findOne({ _id: req.params.performerId })
        if(!foundPerformer) throw new Error(`Could not locate performer ${req.params.performerId}`)
        const foundMovie = await Movie.findOne({ _id: req.params.movieId })
        if(!foundPerformer) throw new Error(`Could not locate movie with is ${req.params.movieId}`)
        //many to many
        foundMovie.cast.push(foundPerformer._id)
        foundPerformer.credits.push(foundMovie._id)
        await foundMovie.save()
        await foundPerformer.save()
        res.status(200).json({
            msg: `Sucessfully associated performer ${req.params.performerId} with movie with id ${req.params.movieId}`,
            movie: foundMovie,
            performer: foundPerformer
        })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}