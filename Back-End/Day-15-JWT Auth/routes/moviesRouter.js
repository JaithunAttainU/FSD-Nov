const { Router } = require("express");
const { getMovies, getMovieById, postMovie, updateMovieById, deleteMovieById } = require('../controllers/movieController')

const moviesRouter = Router();


moviesRouter.get('/', getMovies);
moviesRouter.get('/:movieId', getMovieById);
moviesRouter.post('/', postMovie)
moviesRouter.put('/:movieId', updateMovieById)
moviesRouter.delete('/:movieId', deleteMovieById)

module.exports = moviesRouter