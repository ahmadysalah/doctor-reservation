const {
  appointments,
  admins,
  doctors,
} = require('../models');

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

module.exports = resetDatabase;
