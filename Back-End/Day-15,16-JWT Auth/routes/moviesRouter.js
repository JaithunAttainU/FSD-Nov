const { Router } = require("express");
const { getMovies, getMovieById, postMovie, updateMovieById, deleteMovieById } = require('../controllers/movieController');
const { authMiddleware, isAdminUserMiddleware } = require("../middlewares/authMiddleware");

const moviesRouter = Router();

moviesRouter.use(authMiddleware)

moviesRouter.get('/', getMovies);
moviesRouter.get('/:movieId', getMovieById);

// moviesRouter.use(isAdminUserMiddleware)
moviesRouter.post('/', isAdminUserMiddleware, postMovie)
moviesRouter.put('/:movieId', isAdminUserMiddleware, updateMovieById)
moviesRouter.delete('/:movieId', isAdminUserMiddleware, deleteMovieById)

module.exports = moviesRouter