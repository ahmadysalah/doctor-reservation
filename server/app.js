const express = require('express');

const app = express();
const compression = require('compression');
const database = require('./database/connection');
const router = require('./routes');

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

app.use('/api/v1', router);

app.use('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'bad request',
  });
});

module.exports = app;
