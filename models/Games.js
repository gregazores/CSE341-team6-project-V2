const mongoose = require('mongoose');


const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    multiplayer: {
        type: Boolean,
        required: true
    },
    controllerSupport: {
        type: Boolean,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    platform: {
        type: String,
        required: true
    }

})

module.exports = GameSchema
//module.exports = mongoose.model('User', UserSchema)