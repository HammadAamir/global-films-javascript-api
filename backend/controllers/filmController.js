const Film = require('../models/filmModel')
const mongoose = require('mongoose')

// Get all films
const getAllFilms = async (req, res) => {
    const films = await Film.find({}).sort({createdAt: -1})
    res.status(200).json(films)
}

// Get single film
const getFilm = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such film'})
    }
    const film = await Film.findById(id)

    if (!film){
        return res.status(404).json({error: 'No such film!'})
    }

    res.status(200).json(film)
}

// Create a new film
const createFilm = async (req, res) =>{
    const {name, description, release_date, rating, ticket_price, country, genre} = req.body
    try{
        const film = await Film.create({name, description, release_date, rating, ticket_price, country, genre})
        res.status(200).json(film)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

// Delete a film
const deleteFilm = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such film'})
    }

    const film = await Film.findOneAndDelete({_id: id})

    if(!film){
        return res.status(404).json({error: 'No such film'})
    }

    res.status(200).json(film)
}
// Update a film
const updateFilm = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such film'})
    }

    const film = await Film.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    
    if(!film){
        return res.status(404).json({error: 'No such film'})
    }

    res.status(200).json(film)
}

module.exports = {
    getAllFilms,
    getFilm,
    createFilm,
    deleteFilm,
    updateFilm
}