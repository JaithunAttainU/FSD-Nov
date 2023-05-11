const { initDB } = require("../dbConfig")

let movieTableConnection;
async function getMovieCollection() {
  movieTableConnection = await initDB()
}

getMovieCollection()

const getMovies = async (request, response) => {
  const { name, language } = request.query

  try {
    const [movies] = await movieTableConnection.execute(`select * from movies where language='${language}'`)
    response.send({ status: 'success', movies })
  } catch (error) {
    console.log("Error fetching movies from DB", error)
    response.status(500).send({ status: 'error', msg: 'Error fetching movies from DB' })
  }
}

const getMovieById = async (request, response) => {
  const { movieId } = request.params
  console.log(movieId)
  try {
    const [movie] = await movieTableConnection.execute(`select * from movies where movieID='${movieId}'`)
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
    const [movie] = await movieTableConnection.execute(`insert into movies(name, language, duration) values ('${movieData.name}', '${movieData.language}', '${movieData.duration}')`)
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