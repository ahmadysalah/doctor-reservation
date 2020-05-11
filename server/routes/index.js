const express = require('express');

const router = express.Router();

const doctors = require('./doctors');

router.use('/doctors', doctors);


module.exports = router;
