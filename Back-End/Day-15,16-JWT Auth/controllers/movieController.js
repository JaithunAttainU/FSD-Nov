const MovieModel = require("../models/movieModel")

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
    const movies = await MovieModel.find(conditions)
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
    const movie = await MovieModel.findById(movieId)
    if (!movie) {
      response.status(404).send({ status: 'error', msg: 'Movie not Found!' })
    } else 
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
    const movie = await MovieModel.create(movieData)
    response.status(201).send({ status: 'success', msg: 'Movie added successfully', movie })
  } catch (error) {
    console.log(error)
    response.status(500).send({ status: 'error', msg: 'Error adding movie', error: error.errors })
  }
}

const updateMovieById = async (request, response) => {
  const { movieId } = request.params
  const updatedMovieData = request.body
  try {
    const result = await MovieModel.findByIdAndUpdate(movieId, updatedMovieData, { new: true, runValidators: true }) //to perform validators in update operations
    response.status(200).send({ status: 'success', msg: 'Movie updated successfully', movie: result })
  } catch (error) {
    console.log(error)
    response.status(500).send({ status: 'error', msg: 'Error adding movie', error: error.errors })
  }
}

const deleteMovieById = async (request, response) => {
  const { movieId } = request.params
  console.log(movieId)
  try {
    const deletedMovie = await MovieModel.findByIdAndDelete(movieId)
    response.send({ status: 'success', msg: "Movie deleted Successfully", movie: deletedMovie })
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