const appointment = require('../models/appointments');

module.exports = async () => {
  const appointments = [
    {
      patientName: 'mohammed',
      patientPhone: '123456',
      patientEmail: 'mohammed@gmail.com',
      patientGender: 'male',
      patientBirthDate: '1990-12-15',
      patientAddress: 'gaza',
      clinic: 'Dermatology',
      doctorName: 'cats',
      appointmentDate: '2020-4-15',
      appointmentTime: '10:30',
    },
    {
      patientName: 'ahmad',
      patientPhone: '123456',
      patientEmail: 'ahmad@gmail.com',
      patientGender: 'male',
      patientBirthDate: '1990-12-15',
      patientAddress: 'gaza',
      clinic: 'Dentistry',
      doctorName: 'cats',
      appointmentDate: '2020/6/17',
      appointmentTime: '11:30',
    },
    {
      patientName: 'samar',
      patientPhone: '123456',
      patientEmail: 'samar@gmail.com',
      patientGender: 'female',
      patientBirthDate: '1990/6/25',
      patientAddress: 'gaza',
      clinic: 'Surgery',
      doctorName: 'cats',
      appointmentDate: '2020/6/18',
      appointmentTime: '12:30',
    },
    {
      patientName: 'ali',
      patientPhone: '123456',
      patientEmail: 'ali@gmail.com',
      patientGender: 'male',
      patientBirthDate: '1990/12/10',
      patientAddress: 'gaza',
      clinic: 'Cardiology',
      doctorName: 'cats',
      appointmentDate: '2020/7/20',
      appointmentTime: '9:30',
    },
  ];
  await appointment.create(appointments);
};
