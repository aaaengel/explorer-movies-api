<<<<<<< HEAD
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
=======
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
const { CelebrateError } = require('celebrate');

const errorHandler = (err, req, res, next) => {
  console.log(err);
  if (err instanceof CelebrateError) {
    return res.status(400).send(err.details.get('body'));
  }

  if (err.status) {
    return res.status(err.status).send({ message: err.message });
  }

  res.status(500).send({ message: err.message });
<<<<<<< HEAD
  next();
=======
  return next();
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
};

module.exports = errorHandler;
