const mongoose = require('mongoose');

const { Schema } = mongoose;

const adminsSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: false,
    trim: true,
  },
  avatar: {
    type: String,
    required: false,
    trim: true,
  },
});

module.exports = mongoose.model('admins', adminsSchema);
