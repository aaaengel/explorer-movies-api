<<<<<<< HEAD
const Movie = require("../models/movie");
=======
const Movie = require('../models/movie');
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
const {
  NotFound,
  BadRequest,
  ServerError,
  Forbidden,
} = require('../errors');

const returnMovies = (req, res, next) => {
<<<<<<< HEAD
const owner = req.user._id;
=======
  const owner = req.user._id;
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a

  Movie.find({ owner }).then((movies) => {
    if (!movies.length) {
      next(new NotFound('movies undefined'));
    }
    return res.send({ data: movies });
  })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest('invalid data'));
      }
      next(new ServerError('server error'));
    });
};

const createMovie = (req, res, next) => {
<<<<<<< HEAD
  const owner = req.user._id
  const { country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail  } = req.body;
  Movie.create({ country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail, owner})
=======
  const owner = req.user._id;
  Movie.create({
    owner, ...req.body,
  })
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequest('invalid data'));
      }
      return next(new ServerError('server error'));
    });
};

const deleteMovieById = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movie) => {
      if (!movie) {
        return next(new NotFound('movie undefined'));
      }
<<<<<<< HEAD
      if (!movie.owner.equals(req.user._id)) {
        return next(new Forbidden('Нет прав на удаление чужой карточки'));
      }
      Movie.findByIdAndRemove(req.params.id)
        .then((deletedMovie) => res.status(200).send({ data: deletedMovie }))
        .catch(next);
=======
      if (!movie.owner.equals(req.user._id._id)) {
        return next(new Forbidden('Нет прав на удаление чужого фильма'));
      }
      movie.remove();
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
      return next();
    })
    .catch((err) => {
      if (err.name === 'CastError') {
<<<<<<< HEAD
        return next(new BadRequest('invalid data'));
=======
        return next(new BadRequest(err.message));
      } if (err.name === 'ValidationError') {
        return next(new BadRequest(err.message));
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
      }
      return next(new ServerError('server error'));
    });
};

module.exports = {
  returnMovies,
  createMovie,
<<<<<<< HEAD
  deleteMovieById
}
=======
  deleteMovieById,
};
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
