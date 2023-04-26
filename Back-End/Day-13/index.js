const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const { getMovies, getMovieById, postMovie, updateMovieById, deleteMovieById } = require('./controllers/movieController')
const { initDB } = require('./dbConfig')

const app = express()
app.use(express.json())
initDB()

app.get('/movies', getMovies);
app.get('/movies/:movieId', getMovieById);
app.post('/movies', postMovie)
app.put('/movies/:movieId', updateMovieById)
app.delete('/movies/:movieId', deleteMovieById)

app.listen(8000, () => {
  console.log("Server Started Successfully")
})