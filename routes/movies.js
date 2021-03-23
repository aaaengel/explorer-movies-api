const moviesRouter = require('express').Router();
const { validateCreateMovie } = require('../middlewares/validators/validateMovies');
const {
  returnMovies,
  createMovie,
  deleteMovieById,
} = require('../controllers/movies');

moviesRouter.get('/', returnMovies);
moviesRouter.post('/', validateCreateMovie, createMovie);
moviesRouter.delete('/:movieId', validateCreateMovie, deleteMovieById);

module.exports = moviesRouter;
