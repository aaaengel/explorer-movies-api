const authRouter = require('express').Router();
const {
  auth,
  register,
} = require("../controllers/auth");

const registerValidator = require('../middlewares/validators/register');

authRouter.post("/signup", registerValidator, register);
authRouter.post("/signin", auth);
module.exports = authRouter;