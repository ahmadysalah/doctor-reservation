const doctors = require('../../database/models/doctors');

// get all doctors in same clinic or specialize
const getDoctorsClinic = async (req, res) => {
  const { clinic } = req.params;
  try {
    const doctorsData = await doctors.find({ specialization: clinic });
    res.status(200).json({
      status: 200,
      message: 'successfully',
      doctorsData,
    });
  } catch (e) {
    res.status(400).json({ status: 400, message: 'Failed get doctors from this clinic' });
  }
};

module.exports = getDoctorsClinic;
