const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {
  Unauthorized, Conflict, BadRequest, ServerError,
} = require('../errors');
const { JWT_SECRET, JWT_TTL } = require('../config');

const register = (req, res, next) => {
  const {
    email, password, name,
  } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        return next(Conflict('email уже используется'));
      }
      return bcrypt.hash(password, 10);
    })
    .then((hash) => User.create({
      email, hash, name,
    }))
    .then((user) => {
      const newUser = {
        email: user.email,
        name: user.name,
        _id: user._id,
      };
      res.send({ data: newUser });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return next(new BadRequest('invalid data'));
      }
      return next(new ServerError('server error'));
    });
};

const auth = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new Unauthorized('Не правильный email или пароль');
      }
      return bcrypt.compare(password, user.password)
        .then((isValid) => {
          if (isValid) {
            return user;
          }
          throw new Unauthorized('Не правильный email или пароль');
        });
    })
    .then((_id) => {
      const token = jwt.sign({ _id }, JWT_SECRET, { expiresIn: JWT_TTL });
      res.send({ token });
    })
    .catch(next);
};

module.exports = {
  auth,
  register,
};
