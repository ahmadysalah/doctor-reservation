const express = require('express');

const router = express.Router();

const doctors = require('./doctors');
const appointments = require('./appointments');

router.use('/doctors', doctors);
router.use('/appointments', appointments);

router.use((error, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: 'Internal Error',
  });
});

module.exports = router;
