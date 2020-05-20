const appointments = require('../../database/models/appointments');
const AppointsValidation = require('../../utils/validation/appointments');

// post new appointment by send json of data by body :-
const postAppoint = async (req, res) => {
  try {
    // try to get result of validation before post the data
    if (await AppointsValidation(req.body)) {
      await appointments.create(req.body);
      res.status(200).json({
        status: 200,
        message: 'Appointment Added Successfully',
      });
    } else {
      res.status(400).json({ message: 'Failed save appointment' });
    }
  } catch (e) {
    res.status(400).json({ message: 'Failed save appointment, please check your data' });
  }
};

module.exports = postAppoint;
