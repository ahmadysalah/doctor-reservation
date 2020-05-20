const {
  appointments,
  admins,
  doctors,
} = require('../models');

// if you want to delete all data on the data base
const resetDatabase = async () => {
  try {
    await appointments.deleteMany();
    await admins.deleteMany();
    await doctors.deleteMany();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('database resting Error', err);
    throw err;
  }
};

// if you want to execute this function,
// uncomment the line bellow and execute this file by nod environment...
// resetDatabase()

module.exports = resetDatabase;
