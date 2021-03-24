const moviesRouter = require('express').Router();
const { validateCreateMovie, validateDeleteMovie } = require('../middlewares/validators/validateMovies');
const {
  returnMovies,
  createMovie,
  deleteMovieById,
} = require('../controllers/movies');

moviesRouter.get('/', returnMovies);
moviesRouter.post('/', validateCreateMovie, createMovie);
moviesRouter.delete('/:movieId', validateDeleteMovie, deleteMovieById);

module.exports = moviesRouter;
