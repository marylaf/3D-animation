const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const coneRouter = require('./routes/cone');

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/conedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { PORT = 3000 } = process.env;

app.use(bodyParser.json());

app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
