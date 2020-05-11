const database = require('../connection');
const admin = require('../data/admin');
const appointments = require('../data/appointment');
const doctors = require('../data/doctors');

database
  // eslint-disable-next-line no-console
  .on('open', () => console.log('database is connected'))
  .on('error', () => process.exit(1));


const createEmptyCollection = async () => {
  try {
    admin();
    appointments();
    doctors();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('creating collection Error', err);
    throw err;
  }
};

module.exports = createEmptyCollection;
