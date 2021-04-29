const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD
const routes = require("./routes/index");
=======
const { errors } = require('celebrate');
const helmet = require('helmet');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const { errorLogger } = require('./middlewares/logger');
const { MONGO_DB_ADDRESS } = require('./config');
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a

const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
<<<<<<< HEAD
mongoose.connect('mongodb://localhost:27017/bitfilmsdb', {
=======
mongoose.connect(MONGO_DB_ADDRESS, {
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
<<<<<<< HEAD
=======
app.use(helmet());

>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((err, req, res, next) => {
  if (err.name === 'SyntaxError') {
    return (res.status(400).send({ message: 'incorrect data' }));
  } if (err.name === 'MongooseError') {
    return (res.status(500).send({ message: 'server error' }));
  }
<<<<<<< HEAD

  return next();
});
app.use('/', routes);

app.listen(PORT);
=======
  return next(res.status(err.status).send({ message: err.message }));
});
app.use('/', routes);
app.use(errorLogger);
app.use(errorHandler);
app.use(errors());
app.listen(PORT);
>>>>>>> a4317b22e718ea67ebfac3f16cb056e3f6630b4a
