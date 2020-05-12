const doctors = require('../../database/models/doctors');
const DoctorsValidation = require('../../utils/validation/doctors');

const postDoctor = async (req, res) => {
  try {
    if (await DoctorsValidation(req.body)) {
      await doctors.create(req.body);
      res.status(200).json({
        status: 200,
        message: 'successfully',
      });
    } else {
      res.status(400).json({ message: 'Failed save doctor check your data' });
    }
  } catch (e) {
    res.status(400).json({ message: 'Failed save doctor check your data' });
  }
};

module.exports = postDoctor;
