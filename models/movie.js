<<<<<<< HEAD
const mongoose = require("mongoose");
=======
const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
  image: {
    type: String,
<<<<<<< HEAD
    required:true,
=======
    required: true,
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: 'Укажите корректную ссылку!',
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: 'Укажите корректную ссылку!',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return isURL(v);
      },
      message: 'Укажите корректную ссылку!',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    unique: true,
    required: true,
  },
});

<<<<<<< HEAD
module.exports = mongoose.model('Movie', movieSchema);
=======
module.exports = mongoose.model('Movie', movieSchema);
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
