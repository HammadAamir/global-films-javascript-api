const express = require('express')
const filmsRoutes = require('./routes/films')

// express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Using film router
app.use('/films', filmsRoutes)

const PORT = 4000;

// listen for requests
app.listen(PORT, () => console.log("Server started on PORT " + PORT))
