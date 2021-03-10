const moviesRouter = require('express').Router();
const {
  returnMovies,
  createMovie,
  deleteMovieById
} = require("../controllers/movies")

moviesRouter.get("/", returnMovies);
moviesRouter.post("/", createMovie);
moviesRouter.delete("/:movieId", deleteMovieById);

module.exports = moviesRouter;