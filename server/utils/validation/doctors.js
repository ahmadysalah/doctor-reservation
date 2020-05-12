const yup = require('yup');

const schema = yup.object().shape({
  fullName: yup.string(),
  email: yup.string().email().required(),
  picture: yup.string(),
  gender: yup.mixed().oneOf(['male', 'female']),
  specialization: yup.string().required(),
  birthDate: yup.date(),
});

const DoctorsValidation = (doctor) => schema.isValid(doctor);

module.exports = DoctorsValidation;
