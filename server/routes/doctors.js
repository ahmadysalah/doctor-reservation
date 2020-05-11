const express = require('express');

const doctorsRouter = express.Router();

const {
  getAllDoctors,
} = require('../controllers/doctors');

doctorsRouter.get('/', getAllDoctors);


module.exports = doctorsRouter;
