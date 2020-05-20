const database = require('../connection');
const admin = require('../data/admin');
const appointments = require('../data/appointment');
const doctors = require('../data/doctors');

// connect to database
database
  // eslint-disable-next-line no-console
  .on('open', () => console.log('database is connected'))
  .on('error', () => process.exit(1));

// create the collection beside insert the fakedata
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
// execute the function ..
// just call this file by node environment beside .env file inside url of the database
// see connection file to know url of DB.
createEmptyCollection();
module.exports = createEmptyCollection;
