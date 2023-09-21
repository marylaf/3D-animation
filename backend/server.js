const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const coneRouter = require('./routes/cone');

const app = express();

const { PORT = 3000 } = process.env;

app.use(cors());

app.use(bodyParser.json());

app.use('/', coneRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
  
