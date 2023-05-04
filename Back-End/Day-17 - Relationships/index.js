const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const { initDB } = require('./dbConfig')
const movieRouter = require('./routes/movieRoutes')
const reviewRouter = require('./routes/reviewRoutes')

const app = express()
app.use(express.json())
initDB()

app.use('/movies', movieRouter)
app.use('/', reviewRouter)

app.listen(8000, () => {
  console.log("Server Started Successfully")
})