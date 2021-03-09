const mongoose = require('mongoose');
const validator = require("validator")

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
module.exports = mongoose.model('User', userSchema);