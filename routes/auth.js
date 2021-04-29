const authRouter = require('express').Router();
const {
  auth,
  register,
<<<<<<< HEAD
} = require("../controllers/auth");

const registerValidator = require('../middlewares/validators/register');

authRouter.post("/signup", registerValidator, register);
authRouter.post("/signin", auth);
module.exports = authRouter;
=======
} = require('../controllers/auth');

const registerValidator = require('../middlewares/validators/register');

authRouter.post('/signup', registerValidator, register);
authRouter.post('/signin', auth);
module.exports = authRouter;
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
