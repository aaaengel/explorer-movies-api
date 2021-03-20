const User = require('../models/user');
const {
  BadRequest,
  ServerError,
} = require('../errors');

const returnMe = (req, res, next) => {
  User.findById(req.user._id._id)
    .then((user) => res.send({
      email: user.email,
      name: user.name,
    })).catch((err) => {
      next(err);
    });
};

const updateUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    {
      name,
      about,
    },
    { new: true, runValidators: true },

  ).then((user) => {
    if (!user) {
      res.status(404)
        .send({ message: 'User not found' });
      return;
    }
    res.send(user);
  }).catch((err) => {
    if (err.name === 'ValidationError') {
      return next(new BadRequest('data is invalid'));
    } if (err.name === 'CastError') {
      return next(new BadRequest('incorrect data'));
    }
    return next(new ServerError('server error'));
  });
};

module.exports = {
  returnMe,
  updateUser,
};
