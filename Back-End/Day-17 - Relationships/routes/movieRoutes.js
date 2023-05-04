const { Router } = require("express");
const { getMovies, getMovieById, postMovie, updateMovieById, deleteMovieById } = require("../controllers/movieController");

const movieRouter = Router()

movieRouter.get('/', getMovies);
movieRouter.get('/:movieId', getMovieById);
movieRouter.post('/', postMovie)
movieRouter.put('/:movieId', updateMovieById)
movieRouter.delete('/:movieId', deleteMovieById)

module.exports = movieRouter


