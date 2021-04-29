const mongoose = require('mongoose');
<<<<<<< HEAD
const validator = require("validator")
=======
const validator = require('validator');
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    default: '',
  },
  password: {
    type: String,
    minlength: 8,
    select: false,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
      message: 'Укажите корректный Email!',
    },
    unique: true,
  },
});
<<<<<<< HEAD
module.exports = mongoose.model('User', userSchema);
=======
module.exports = mongoose.model('User', userSchema);
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
