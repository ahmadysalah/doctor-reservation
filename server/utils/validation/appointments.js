const yup = require('yup');

const schema = yup.object().shape({
  patientName: yup.string().required(),
  patientPhone: yup.string(),
  patientEmail: yup.string().email(),
  picture: yup.string(),
  patientGender: yup.mixed().oneOf(['male', 'female']),
  patientAddress: yup.string(),
  patientBirthDate: yup.date(),
  clinic: yup.string().required(),
  doctorName: yup.string().required(),
  appointmentDate: yup.date().required(),
  appointmentTime: yup.string().required(),
});


const appointsValidation = (appointment) => schema.isValid(appointment);

module.exports = appointsValidation;
