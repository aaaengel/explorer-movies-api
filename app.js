const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler")
const { errorLogger } = require("./middlewares/logger");
const { errors } = require('celebrate');
const helmet = require('helmet');

const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(helmet())
app.use(errorLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  if (err.name === 'SyntaxError') {
    return (res.status(400).send({ message: 'incorrect data' }));
  } if (err.name === 'MongooseError') {
    return (res.status(500).send({ message: 'server error' }));
  }
 res.status(err.status).send({ message: err.message})
  return next();
});
app.use('/', routes);

app.use(errors())
app.use(errorHandler)
app.listen(PORT);