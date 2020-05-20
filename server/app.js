const express = require('express');

const app = express();
const { join } = require('path');
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

// connect to mangoDB
database
  // eslint-disable-next-line no-console
  .on('open', () => console.log('database is connected'))
  .on('error', () => process.exit(1));

app.use('/api/v1', router);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
