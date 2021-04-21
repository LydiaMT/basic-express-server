'use strict';

const express = require('express');
const app = express();


const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');

app.use(express.json());
app.use(logger);

app.get('/hello', (req, res) => {
  res.send('hello world!');
})

app.get('/person', validator, (req, res) => {
  res.send({ name: req.query.name });
})

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`server is up on ${port}`);
    });
  }
}
