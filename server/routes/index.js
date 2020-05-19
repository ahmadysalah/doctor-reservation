const express = require('express');

const router = express.Router();

const doctors = require('./doctors');
const appointments = require('./appointments');
const googleLogin = require('../controllers/login');
const { covid } = require('../controllers/fetch');

router.use('/doctors', doctors);
router.use('/appointments', appointments);
router.use('/news', covid);
router.post('/login/google', googleLogin);


router.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Bad request',
  });
});

router.use((error, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: 'Internal Error',
  });
});

module.exports = router;
