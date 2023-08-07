const express = require('express')
const mongoose = require('mongoose')
const filmsRoutes = require('./routes/films')
var bodyParser = require('body-parser');

// express app
const app = express()

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Using film router
app.use('/films', filmsRoutes)

mongoose.connect("mongodb+srv://haswucc:hammad123@films.z5mgghg.mongodb.net/retryWrites=true&w=majority")
.then(() => {
    const PORT = 4000;

    // listen for requests
    app.listen(PORT, () => console.log("Connected to DB, server started on PORT " + PORT))    
})
.catch((error) => {
    console.log(error)
})
