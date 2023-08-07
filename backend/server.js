const express = require('express')

// express app
const app = express()

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.get('/', (req, res) => {
    res.json({msg: "Welcome to the app!"})
})


const PORT = 4000;

// listen for requests
app.listen(PORT, () => console.log("Server started on PORT " + PORT))
