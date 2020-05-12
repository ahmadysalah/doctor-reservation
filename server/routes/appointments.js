const express = require('express');

const appointmentsRouter = express.Router();

const {
  getAllAppointments,
  postAppoint,
  deleteAppoint,
} = require('../controllers/appointment');

appointmentsRouter.get('/', getAllAppointments);
appointmentsRouter.post('/postAppoint', postAppoint);
appointmentsRouter.delete('/:id', deleteAppoint);

module.exports = appointmentsRouter;
