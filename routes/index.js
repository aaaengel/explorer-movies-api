const routes = require('express').Router();
const usersRouter = require('./users');
const moviesRouter = require('./movies');
<<<<<<< HEAD
const authRouter = require("./auth");
const authMiddleware = require("../middlewares/auth")
const {NotFound} = require("../errors")
routes.use('/', authRouter);

=======
const authRouter = require('./auth');
const authMiddleware = require('../middlewares/auth');
const { NotFound } = require('../errors');

routes.use('/', authRouter);
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a

routes.use('/users', authMiddleware, usersRouter);

routes.use('/movies', authMiddleware, moviesRouter);

<<<<<<< HEAD
routes.use('/*', () => {
  throw new NotFound('запрашиваемый ресур не найден');
});

module.exports = routes;
=======
routes.use('/*', authMiddleware, () => {
  throw new NotFound('запрашиваемый ресур не найден');
});

module.exports = routes;
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
