const moviesRouter = require('express').Router();
<<<<<<< HEAD
const {
  returnMovies,
  createMovie,
  deleteMovieById
} = require("../controllers/movies")

moviesRouter.get("/", returnMovies);
moviesRouter.post("/", createMovie);
moviesRouter.delete("/:movieId", deleteMovieById);

module.exports = moviesRouter;
=======
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
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
