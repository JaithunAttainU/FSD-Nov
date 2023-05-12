const { Router } = require('express');
const { getAllMovies, getMovieById, postMovie, updateMovie, deleteMovie } = require('../controllers/movieController');


const movieRouter = Router()

movieRouter.get('/', getAllMovies);
movieRouter.get('/:movieId', getMovieById);
movieRouter.post('/', postMovie);
movieRouter.put('/:movieId', updateMovie);
movieRouter.delete('/:movieId', deleteMovie);


module.exports = movieRouter