const express = require('express');
const router = express.Router();
const { MovieController } = require('../controllers/movies');

router.get('/', (req, res, next) => {
    let controller = new MovieController('movies')
    controller.getAllMovies(req, res, next)
});

router.get('/:id', (req, res, next) => {
    let controller = new MovieController('movies')
    controller.getSingleMovie(req, res, next)
});

router.post('/', (req, res, next) => {
    let controller = new MovieController('movies')
    controller.createSingleMovie(req, res, next)
});

router.put('/:id', (req, res, next) => {
    console.log("you called me put")
    let controller = new MovieController('movies')
    controller.updateSingleMovie(req, res, next)
});

router.delete('/:id', (req, res, next) => {
    let controller = new MovieController('movies')
    controller.deleteSingleMovie(req, res, next)
});

module.exports = router;