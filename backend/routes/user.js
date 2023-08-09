const express = require('express')
const { loginUser, registerUser } = require ('../controllers/userController')
const router = express.Router()

// Login User
router.post('/login', loginUser)

// Register User
router.post('/register', registerUser)

module.exports = router