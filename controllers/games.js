const GameSchema = require('../models/Games')
const mongoose = require("mongoose");
const {getAll, getSingle, createSingle, updateSingle, deleteSingle} = require("./helper")
//const {smoothieSchema, userSchema} = require('../library/validationSchemas')

let GamesController = function(endpoint) {
    this.endpoint = endpoint
}

GamesController.prototype.getAllGames = async function (req, res, next) {
    const GameType = mongoose.model(this.endpoint, GameSchema, this.endpoint);
    await getAll(GameType, req ,res, next)
}

GamesController.prototype.getSingleGame = async function(req, res, next) {
    const GameType = mongoose.model(this.endpoint, GameSchema, this.endpoint);
    await getSingle(GameType, req ,res, next)
}

GamesController.prototype.createSingleGame = async function(req, res, next) {
    const GameType = mongoose.model(this.endpoint, GameSchema, this.endpoint);
    const game = new GameType({
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

GamesController.prototype.updateSingleGame = async function(req, res, next) {
    const GameType = mongoose.model(this.endpoint, GameSchema, this.endpoint);
    const game = ({
        title: req.body.title,
        size: req.body.size,
        multiplayer: req.body.multiplayer,
        controllerSupport: req.body.controllerSupport,
        developer: req.body.developer,
        publisher: req.body.publisher,
        releaseDate: req.body.releaseDate,
        platform: req.body.platform
    })
    await updateSingle(GameType, game, req ,res, next)
}

GamesController.prototype.deleteSingleGame = async function(req, res, next) {
    const GameType = mongoose.model(this.endpoint, GameSchema, this.endpoint);
    await deleteSingle(GameType, req ,res, next)
}



module.exports = {
    GamesController
}


/* ************************************************** HELPER FUNCTIONS **************************************************  */




