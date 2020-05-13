const doctors = require('../../database/models/doctors');

const getAllDoctors = async (req, res) => {
  try {
    const doctorsData = await doctors.find();
    res.status(200).json(
      doctorsData,
    );
  } catch (e) {
    res.status(400).json({ message: 'Failed get doctors' });
  }
};

module.exports = getAllDoctors;
