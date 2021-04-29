const User = require('../models/user');
const {
  BadRequest,
  ServerError,
} = require('../errors');

<<<<<<< HEAD

const returnMe = (req, res, next) =>{
  User.findById(req.user._id._id)
    .then((user) => res.send({
      email: user.email,
      name: user.name
    })).catch((err) => {
      next(err);
    });
}

const updateUser = (req, res, next) =>{
  const { name, about } = req.body;
=======
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
  const { name, email } = req.body;
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
  User.findByIdAndUpdate(
    req.user._id,
    {
      name,
<<<<<<< HEAD
      about,
=======
      email,
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
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
<<<<<<< HEAD
}

module.exports = {
  returnMe,
  updateUser
}
=======
};

module.exports = {
  returnMe,
  updateUser,
};
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
