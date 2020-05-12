const express = require('express');

const router = express.Router();

const doctors = require('./doctors');
const appointments = require('./appointments');

router.use('/doctors', doctors);
router.use('/appointments', appointments);


module.exports = router;
