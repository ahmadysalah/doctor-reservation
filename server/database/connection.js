const mongoose = require('mongoose');
require('env2')('config.env');

let dbURI = '';
if (process.env.NODE_ENV === 'production') {
  // choose the database from env file named dbURI
  dbURI = process.env.PRO_DB;
} else {
  dbURI = process.env.DEV_DB;
}

// start connect the db and add some option json to the connect function by mongoose npm.
mongoose
  .connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error('Connection error :=>', e.message);
  });

const dataBase = mongoose.connection;

module.exports = dataBase;
