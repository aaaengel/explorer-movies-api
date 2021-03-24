const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { errors } = require('celebrate');
const helmet = require('helmet');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const { errorLogger } = require('./middlewares/logger');
const { MONGO_DB_ADDRESS } = require('./config');

const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
mongoose.connect(MONGO_DB_ADDRESS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  if (err.name === 'SyntaxError') {
    return (res.status(400).send({ message: 'incorrect data' }));
  } if (err.name === 'MongooseError') {
    return (res.status(500).send({ message: 'server error' }));
  }
  return next(res.status(err.status).send({ message: err.message }));
});
app.use('/', routes);
app.use(errorLogger);
app.use(errorHandler);
app.use(errors());
app.listen(PORT);
