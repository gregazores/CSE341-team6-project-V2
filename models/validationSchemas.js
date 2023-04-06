const Joi = require('@hapi/joi')

const gameSchema = Joi.object({
    title: Joi.string().required(),
    size: Joi.string().required(),
    multiplayer: Joi.boolean().required(),
    controllerSupport: Joi.boolean().required(),
    developer: Joi.string().required(),
    publisher: Joi.string().required(),
    releaseDate: Joi.date().required(),
    platform: Joi.string().required(),
})

const movieSchema = Joi.object({
    title: Joi.string().required(),
    releaseYear: Joi.number().integer().required(),
    genre: Joi.string().required(),
    rating: Joi.string().required(),
    director: Joi.string().required()
})

const showSchema = Joi.object({
    title: Joi.string().required(),
    season: Joi.number().integer().required(),
    rating: Joi.string().required(),
    seasonReleaseYear: Joi.number().integer().required(),
    genre: Joi.string().required()
})

module.exports = {
    gameSchema,
    movieSchema,
    showSchema
}

