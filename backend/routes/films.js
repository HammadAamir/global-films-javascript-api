const express = require('express')
const {getAllFilms, getFilm, createFilm, deleteFilm, updateFilm} = require ('../controllers/filmController')
const router = express.Router()

// GET all films
router.get('/', getAllFilms)

// GET specific film
router.get('/:id', getFilm)

// POST a new film
router.post('/create', createFilm)

// DELETE a film
router.delete('/:id', deleteFilm)

// UPDATE a film
router.patch('/:id', updateFilm)
module.exports = router