<<<<<<< HEAD
/* eslint-disable import/no-extraneous-dependencies */
=======
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const register = celebrate({
  body: {
    email: Joi.string().min(2).max(30).required()
      .custom((value, helper) => {
        if (validator.isEmail(value)) {
          return value;
        }

        return helper.message('Невалидный email');
      })
      .messages({
        'any.required': 'Обязательное поле',
      }),
    password: Joi.string().min(2).max(30).required()
      .messages({
        'string.min': 'Минимум 2 символа',
        'string.max': 'Максимум 30 символов',
        'any.required': 'Обязательное поле',
      }),
<<<<<<< HEAD
      name: Joi.string().min(2).max(30).required()
=======
    name: Joi.string().min(2).max(30).required()
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
      .messages({
        'string.min': 'Минимум 2 символа',
        'string.max': 'Максимум 30 символов',
        'any.required': 'Обязательное поле',
      }),
  },
});

module.exports = register;
