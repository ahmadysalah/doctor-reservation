const doctors = require('../../database/models/doctors');

// delete doctor by id :
const deleteDoctor = async (req, res) => {
  const { id } = req.params;
  try {
    await doctors.deleteOne({ _id: id });
    res.status(200).json({
      status: 200,
      message: `Doctor id: "${id}" deleted successfully`,
    });
  } catch (e) {
    res.status(400).json({ status: 400, message: 'Failed' });
  }
};

module.exports = deleteDoctor;
