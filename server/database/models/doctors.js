const mongoose = require('mongoose');

const { Schema } = mongoose;

const doctorsSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: false,
    trim: true,
  },
  picture: {
    type: String,
    required: false,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  specialization: {
    type: String,
    required: true,
    trim: true,
  },
  birthDate: {
    type: Date,
    required: false,
    trim: true,
  },

});

module.exports = mongoose.model('doctors', doctorsSchema);
