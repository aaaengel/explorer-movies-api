const usersRouter = require('express').Router();
const { returnMe, updateUser } = require('../controllers/users');

usersRouter.get('/me', returnMe);
usersRouter.patch('/me', updateUser);

module.exports = usersRouter;
