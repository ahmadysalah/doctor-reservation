const appointments = require('../../database/models/appointments');

const getAllAppointments = async (req, res) => {
  try {
    const appointmentsData = await appointments.find();
    res.status(200).json({
      status: 200,
      message: 'successfully',
      appointmentsData,
    });
  } catch (e) {
    res.status(400).json({ message: 'Failed get the appointments' });
  }
};

module.exports = getAllAppointments;
