const express = require('express')

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
router.post('/create', (req, res) => {
    res.json({msg: "Create a new film"})
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