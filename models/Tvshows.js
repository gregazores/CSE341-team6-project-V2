const mongoose = require("mongoose");


const TvshowSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    season: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    seasonReleaseYear: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    }

})

module.exports = TvshowSchema
//module.exports = mongoose.model('User', UserSchema)