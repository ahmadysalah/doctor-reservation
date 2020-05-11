const express = require('express');

const app = express();
const compression = require('compression');
const database = require('./database/connection');

app.disabled('x-powered-by');
app.set('port', process.env.PORT || 4000);

app.use([
  compression(),
  express.json(),
  express.urlencoded({ extended: false }),
]);

database
  // eslint-disable-next-line no-console
  .on('open', () => console.log('database is connected'))
  .on('error', () => process.exit(1));

app.use('/', (req, res) => {
  res.send('test');
});

module.exports = app;
