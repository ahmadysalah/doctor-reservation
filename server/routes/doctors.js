const express = require('express');

const doctorsRouter = express.Router();

const {
  getAllDoctors,
  deleteDoctor,
  getDoctorsClinic,
  postDoctor,
} = require('../controllers/doctors');

doctorsRouter.post('/postDoctors', postDoctor);
doctorsRouter.get('/', getAllDoctors);
doctorsRouter.delete('/:id', deleteDoctor);
doctorsRouter.get('/clinic/:clinic', getDoctorsClinic);

module.exports = doctorsRouter;
