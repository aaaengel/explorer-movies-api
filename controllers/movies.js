const Movie = require('../models/movie');
const {
  NotFound,
  BadRequest,
  ServerError,
  Forbidden,
} = require('../errors');

const returnMovies = (req, res, next) => {
  const owner = req.user._id;

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
  const owner = req.user._id;
  Movie.create({
    owner, ...req.body,
  })
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
      res.send(movie);
      if (!movie) {
        return next(new NotFound('movie undefined'));
      }
      if (!movie.owner.equals(req.user._id._id)) {
        return next(new Forbidden('Нет прав на удаление чужого фильма'));
      }
      movie.remove();
      return next();
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        return next(new BadRequest(err.message));
      } if (err.name === 'ValidationError') {
        return next(new BadRequest(err.message));
      }
      return next(new ServerError('server error'));
    });
};

module.exports = {
  returnMovies,
  createMovie,
  deleteMovieById,
};
