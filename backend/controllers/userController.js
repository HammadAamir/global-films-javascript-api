const User = require('../models/userModel')
const mongoose = require('mongoose')

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body
    
    try {
        const user = await User.findOne({ email });

        if (user) {
        if (password === user.password) {
            res.send({ message: 'Login success!', user });
        } else {
            res.send({ message: 'Authentication Failed! Please try again' });
        }
        } else {
        res.send('User not found!');
        }
    } catch (error) {
        // Handle the error
        res.status(500).send('Internal Server Error');
    }
}

const registerUser = async (req, res) => {
    const {name, email, password} = req.body

    console.log("Registering")
    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            res.send({ message: 'User already exists!' });
        } else {
        const newUser = new User({ name, email, password });

        await newUser.save();
        res.send({ message: 'Registration Successful!' });
        }
    } catch (error) {
        // Handle the error
        res.status(500).send('Internal Server Error\n' + error);
    }
}

module.exports = {
    loginUser,
    registerUser
}