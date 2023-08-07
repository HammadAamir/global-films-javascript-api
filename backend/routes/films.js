const express = require('express')
const Film = require('../models/filmModel')
const router = express.Router()

// GET all films
router.get('/', (req, res) => {
    res.json({msg: "All films listed!"})
})

// GET specific film
router.get('/:id', (req, res) => {
    res.json({msg: "Specific film saved!"})
})

// POST a new film
router.post('/create', async (req, res) => {
    console.log(req.body, req.params)
    const {name, description, release_date, rating, ticket_price, country, genre} = req.body
    try{
        const film = await Film.create({name, description, release_date, rating, ticket_price, country, genre})
        res.status(200).json(film)
    }catch(error){
        res.status(400).json({error: error.message})
    }
})

// DELETE a film
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE the film'})
})

// UPDATE a film
router.patch('/:id', (req, res)=>{
    res.json({msg: 'UPDATE the film'})
})
module.exports = router