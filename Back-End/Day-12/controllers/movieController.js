const { initDB } = require("../dbConfig")
const { ObjectId } = require('mongodb')

let movieCollection;
async function getMovieCollection() {
  const collectionName = 'movies'
  movieCollection = await initDB(collectionName)
}

getMovieCollection()

const getMovies = async (request, response) => {
  const { releaseYear, name, genre } = request.query

  const conditions = {}

  if (releaseYear) {
    conditions.releaseYear = releaseYear
  }

  if (name) {
    conditions.name = name
  }

  if (genre) {
    conditions.genre = genre
  }

  try {
    const movies = await movieCollection.find(conditions).toArray()
    response.send({ status: 'success', movies })
  } catch (error) {
    console.log("Error fetching movies from DB")
    response.status(500).send({ status: 'error', msg: 'Error fetching movies from DB' })
  }
}

const getMovieById = async (request, response) => {
  const { movieId } = request.params
  console.log(movieId)
  try {
    const movie = await movieCollection.findOne({ _id: new ObjectId(movieId) })
    response.send({ status: 'success', movie })
  } catch (error) {
    console.log("Error fetching movie from DB")
    response.status(500).send({ status: 'error', msg: 'Error fetching movie from DB' })
  }
}

const postMovie = async (request, response) => {
  const movieData = request.body

  //Validations 20 lines
  try {
    await movieCollection.insertOne(movieData)
    response.status(201).send({ status: 'success', msg: 'Movie added successfully' })
  } catch (error) {
    console.log(error)
    response.status(500).send({ status: 'error', msg: 'Error adding movie' })
  }
}

const updateMovieById = async (request, response) => {
  const { movieId } = request.params
  const updatedMovieData = request.body
  try {
    await movieCollection.updateOne({ _id: new ObjectId(movieId) }, { $set: updatedMovieData })
    response.status(200).send({ status: 'success', msg: 'Movie updated successfully' })
  } catch (error) {
    response.status(500).send({ status: 'error', msg: 'Error adding movie' })
  }
}

const deleteMovieById = async (request, response) => {
  const { movieId } = request.params
  console.log(movieId)
  try {
    const movie = await movieCollection.deleteOne({ _id: new ObjectId(movieId) })
    response.send({ status: 'success', msg: "Movie deleted Successfully" })
  } catch (error) {
    console.log("Error deleting movie from DB")
    response.status(500).send({ status: 'error', msg: 'Error deleting movie from DB' })
  }
}

module.exports = {
  getMovies,
  getMovieById,
  postMovie,
  updateMovieById,
  deleteMovieById
}