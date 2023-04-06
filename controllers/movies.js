const MovieSchema = require('../models/Movies')
const mongoose = require("mongoose");
const {getAll, getSingle, createSingle, updateSingle, deleteSingle} = require("./helper")
//const {smoothieSchema, userSchema} = require('../library/validationSchemas')

let MovieController = function(endpoint) {
    this.endpoint = endpoint
}

MovieController.prototype.getAllMovies = async function (req, res, next) {
    const MovieType = mongoose.model(this.endpoint, MovieSchema, this.endpoint);
    await getAll(MovieType, req ,res, next)
}

MovieController.prototype.getSingleMovie = async function(req, res, next) {
    const MovieType = mongoose.model(this.endpoint, MovieSchema, this.endpoint);
    await getSingle(MovieType, req ,res, next)
}

MovieController.prototype.createSingleMovie = async function(req, res, next) {
    const MovieType = mongoose.model(this.endpoint, MovieSchema, this.endpoint);
    const movie = new MovieType({
        title: req.body.title,
        releaseYear: req.body.releaseYear,
        genre: req.body.genre,
        rating: req.body.rating,
        director: req.body.director
    })
    await createSingle(movie, req ,res, next)
}

MovieController.prototype.updateSingleMovie = async function(req, res, next) {
    const MovieType = mongoose.model(this.endpoint, MovieSchema, this.endpoint);
    const movie = ({
        title: req.body.title,
        releaseYear: req.body.releaseYear,
        genre: req.body.genre,
        rating: req.body.rating,
        director: req.body.director
    })
    await updateSingle(MovieType, movie, req ,res, next)
}

MovieController.prototype.deleteSingleMovie = async function(req, res, next) {
    const MovieType = mongoose.model(this.endpoint, MovieSchema, this.endpoint);
    await deleteSingle(MovieType, req ,res, next)
}



module.exports = {
    MovieController
}







