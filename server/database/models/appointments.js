const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentsSchema = new Schema({
  patientName: {
    type: String,
    required: true,
    trim: true,
  },
  patientPhone: {
    type: String,
    required: false,
    trim: true,
  },
  patientEmail: {
    type: String,
    lowercase: true,
    required: false,
    trim: true,
  },
  patientGender: {
    type: String,
    trim: true,
  },
  patientBirthDate: {
    type: Date,
    required: false,
    trim: true,
  },
  patientAddress: {
    type: String,
    required: false,
    trim: true,
  },
  clinic: {
    type: String,
    required: true,
    trim: true,
  },
  doctorName: {
    type: String,
    required: true,
    trim: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
    trim: true,
  },
  appointmentTime: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('appointments', appointmentsSchema);
