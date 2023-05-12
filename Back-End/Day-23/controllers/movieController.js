const MovieModel = require('../models/movieModel')


const getAllMovies = async (request, response) => {
  try {
    const movies = await MovieModel.findAll({
      // attributes: [

      // ]
      where: {

      }
    })
    response.send({ status: 'success', movies })
  } catch (error) {
    console.log("Error fetching movies from DB", error)
    response.status(500).send({ status: 'error', msg: 'Error fetching movies from DB' })
  }
}

const getMovieById = async (request, response) => {
  const { movieId } = request.params
  try {
    const movie = await MovieModel.findOne({
      where: {
        id: movieId
      }
    })
    response.send({ status: 'success', movie })
  } catch (error) {
    console.log("Error fetching movie from DB", error)
    response.status(500).send({ status: 'error', msg: 'Error fetching movie from DB' })
  }
}

const postMovie = async (request, response) => {
  const movieData = request.body
  try {
    const newMovie = MovieModel.build(movieData)
    await newMovie.save()

    // await MovieModel.create(movieData)
    response.status(201).send({ status: 'success', msg: 'Movie added successfully' })
  } catch (error) {
    response.status(500).send({ status: 'error', msg: error.original.sqlMessage })
  }
}

const updateMovie = async (request, response) => {
  const { movieId } = request.params
  const updatedMovieData = request.body

  try {
    // const movie = await MovieModel.findOne({
    //   where: {
    //     id: movieId
    //   }
    // })

    // await movie.set(updatedMovieData)
    // await movie.save()

    await MovieModel.update(updatedMovieData, {
      where: {
        id: movieId
      }
    })
    response.status(200).send({ status: 'success', msg: 'Movie updated successfully' })

  } catch (error) {
    response.status(500).send({ status: 'error', msg: 'Error adding movie' })
  }
}

const deleteMovie = async (request, response) => {
  const { movieId } = request.params

  try {
    await MovieModel.destroy({
      where: {
        id: movieId
      }
    })
    response.send({ status: 'success', msg: "Movie deleted Successfully" })
  } catch (error) {
    console.log("Error deleting movie from DB")
    response.status(500).send({ status: 'error', msg: 'Error deleting movie from DB' })
  }
}

module.exports = {
  getAllMovies,
  getMovieById,
  postMovie, updateMovie, deleteMovie
}