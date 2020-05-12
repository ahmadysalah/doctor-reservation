const yup = require('yup');

const schema = yup.object().shape({
  patientName: yup.string(),
  patientPhone: yup.string(),
  patientEmail: yup.string().email().required(),
  picture: yup.string(),
  patientGender: yup.mixed().oneOf(['male', 'female']),
  patientAddress: yup.string(),
  patientBirthDate: yup.date(),
  clinic: yup.string(),
  doctorName: yup.string(),
  appointmentDate: yup.date().required(),
  appointmentTime: yup.string().required(),
});


const appointsValidation = (appointment) => schema.isValid(appointment);

module.exports = appointsValidation;
