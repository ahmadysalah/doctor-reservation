const doctors = require('../../database/models/doctors');

const getAllDoctors = async (req, res) => {
  try {
    const doctorsData = await doctors.find();
    res.status(200).json({
      status: 200,
      message: 'successfully',
      doctorsData,
    });
  } catch (e) {
    res.status(400).json({ message: 'Failed' });
  }
};

module.exports = getAllDoctors;
