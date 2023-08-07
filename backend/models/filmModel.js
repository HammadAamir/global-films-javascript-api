const mongoose = require('mongoose')
 const Schema = mongoose.Schema

 const filmSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    ticket_price: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String,
    }
 }, {timestamps: true})

 module.exports = mongoose.model('Film', filmSchema)
