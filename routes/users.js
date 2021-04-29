const usersRouter = require('express').Router();
<<<<<<< HEAD
const { returnMe, updateUser } = require("../controllers/users");

usersRouter.get("/me", returnMe);
usersRouter.patch("/me", updateUser);

module.exports = usersRouter;

=======
const { returnMe, updateUser } = require('../controllers/users');

usersRouter.get('/me', returnMe);
usersRouter.patch('/me', updateUser);

module.exports = usersRouter;
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
