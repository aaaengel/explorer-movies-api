module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
<<<<<<< HEAD

=======
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
};
