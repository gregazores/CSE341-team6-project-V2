const express = require('express');
const router = express.Router();
const { MovieController } = require('../controllers/movies');

router.get("/movies-protected", (req, res, next) => {
    if (req.isAuthenticated()){
      res.send("This request is authenticated");
    } else {
      res.status(400).json("Sorry you must be logged in! No authorization");
    }
});

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