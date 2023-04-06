const MovieSchema = require('../models/Movies')
const mongoose = require("mongoose");
const {getAll, getSingle, createSingle, updateSingle, deleteSingle} = require("./helper")
//const {smoothieSchema, userSchema} = require('../library/validationSchemas')

let MovieController = function(endpoint) {
    this.endpoint = endpoint
}

MovieController.prototype.getAllGames = async function (req, res, next) {
    const MovieType = mongoose.model(this.endpoint, MovieSchema, this.endpoint);
    await getAll(MovieType, req ,res, next)
}

MovieController.prototype.getSingleGame = async function(req, res, next) {
    const MovieType = mongoose.model(this.endpoint, MovieSchema, this.endpoint);
    await getSingle(MovieType, req ,res, next)
}

MovieController.prototype.createSingleGame = async function(req, res, next) {
    const MovieType = mongoose.model(this.endpoint, MovieSchema, this.endpoint);
    const game = new MovieType({
        title: req.body.title,
        size: req.body.size,
        multiplayer: req.body.multiplayer,
        controllerSupport: req.body.controllerSupport,
        developer: req.body.developer,
        publisher: req.body.publisher,
        releaseDate: req.body.releaseDate,
        platform: req.body.platform
    })
    await createSingle(game, req ,res, next)
}

MovieController.prototype.updateSingleGame = async function(req, res, next) {
    const MovieType = mongoose.model(this.endpoint, MovieSchema, this.endpoint);

    await updateSingle(MovieType, req ,res, next)
}

MovieController.prototype.deleteSingleGame = async function(req, res, next) {
    const MovieType = mongoose.model(this.endpoint, MovieSchema, this.endpoint);
    await deleteSingle(MovieType, req ,res, next)
}



module.exports = {
    MovieController
}


/* ************************************************** HELPER FUNCTIONS **************************************************  */




