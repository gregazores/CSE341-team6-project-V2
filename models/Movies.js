const mongoose = require('mongoose');


const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    director: {
        type: String,
    }

})

module.exports = MovieSchema
//module.exports = mongoose.model('User', UserSchema)