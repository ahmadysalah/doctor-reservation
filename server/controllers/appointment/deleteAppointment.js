const appointments = require('../../database/models/appointments');

// delete appointment by id:
const deleteAppoint = async (req, res) => {
  const { id } = req.params;
  try {
    await appointments.deleteOne({ _id: id });
    res.status(200).json({
      status: 200,
      message: `Appointment id: ' ${id} ' was deleted successfully`,
    });
  } catch (e) {
    res.status(400).json({ status: 400, message: 'Failed' });
  }
};

module.exports = deleteAppoint;
