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
  },
});

<<<<<<< HEAD
module.exports = register;
=======
module.exports = register;
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
