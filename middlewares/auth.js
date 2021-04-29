<<<<<<< HEAD
/* eslint-disable import/no-extraneous-dependencies */
=======
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { Forbidden } = require('../errors');

<<<<<<< HEAD

=======
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Forbidden('Нет токена');
  }
  let payload;
  const token = authorization.replace(/^Bearer /, '');

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new Forbidden('Нет токена');
  }
  req.user = payload;

  next();
};

<<<<<<< HEAD
module.exports = auth
=======
module.exports = auth;
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
