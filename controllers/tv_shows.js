const TvShowSchema = require('../models/Tvshows')
const mongoose = require("mongoose");
const {getAll, getSingle, createSingle, updateSingle, deleteSingle} = require("./helper")
const {gameSchema, movieSchema, showSchema} = require('../models/validationSchemas')

let TvShowController = function(endpoint) {
    this.endpoint = endpoint
}

TvShowController.prototype.getAllShows = async function (req, res, next) {
    const TvShowType = mongoose.model(this.endpoint, TvShowSchema, this.endpoint);
    await getAll(TvShowType, req ,res, next)
}

TvShowController.prototype.getSingleShow = async function(req, res, next) {
    const TvShowType = mongoose.model(this.endpoint, TvShowSchema, this.endpoint);
    await getSingle(TvShowType, req ,res, next)
}

TvShowController.prototype.createSingleShow = async function(req, res, next) {

    if (!req.body.title || !req.body.season || !req.body.rating || !req.body.seasonReleaseYear || !req.body.genre) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }

    const showEntries = await showSchema.validateAsync(req.body)

    if (showEntries.error) {
      res.status(400).send({ message: showEntries.error });
      return;
    }

    const TvShowType = mongoose.model(this.endpoint, TvShowSchema, this.endpoint);
    const show = new TvShowType({
        title: req.body.title,
        season: req.body.season,
        rating: req.body.rating,
        seasonReleaseYear: req.body.seasonReleaseYear,
        genre: req.body.genre
    })
    await createSingle(show, req ,res, next)
}

TvShowController.prototype.updateSingleShow = async function(req, res, next) {

    if (!req.body.title || !req.body.season || !req.body.rating || !req.body.seasonReleaseYear || !req.body.genre) {
        res.status(400).send({ message: 'Content can not be empty!' });
        return;
    }

    const showEntries = await showSchema.validateAsync(req.body)

    if (showEntries.error) {
      res.status(400).send({ message: showEntries.error });
      return;
    }


    const TvShowType = mongoose.model(this.endpoint, TvShowSchema, this.endpoint);
    const show = ({
        title: req.body.title,
        season: req.body.season,
        rating: req.body.rating,
        seasonReleaseYear: req.body.seasonReleaseYear,
        genre: req.body.genre
    })
    await updateSingle(TvShowType, show, req ,res, next)
}

TvShowController.prototype.deleteSingleShow = async function(req, res, next) {
    const TvShowType = mongoose.model(this.endpoint, TvShowSchema, this.endpoint);
    await deleteSingle(TvShowType, req ,res, next)
}



module.exports = {
    TvShowController
}





