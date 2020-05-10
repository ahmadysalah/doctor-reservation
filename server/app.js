const express = require('express');

const app = express();
const compression = require('compression');

app.disabled('x-powered-by');
app.set('port', process.env.PORT || 4000);

app.use([
  compression(),
  express.json(),
  express.urlencoded({ extended: false }),
]);

app.use('/', (req, res) => {
  res.send('test');
});

module.exports = app;
