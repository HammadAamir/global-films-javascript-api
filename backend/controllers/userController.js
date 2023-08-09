const User = require('../models/userModel')
const mongoose = require('mongoose')

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if(user){
            if(password == user.password){
                res.send({message: "Login success!", user})
            }
            else{
                res.send({message:"Authentication Failed! Please try again"})
            }
        }
        else{
            res.send("User not found!")
        }
    })
}

const registerUser = async (req, res) => {
    const {name, email, password} = req.body

    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already exists!"})
        }
        else{
            const user = new User({name, email, password})

            user.save(err => {
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message: "Registration Successfull!"})
                }
            })
        }
    })
}

module.exports = {
    loginUser,
    registerUser
}