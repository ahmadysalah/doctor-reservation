const doctor = require('../models/doctors');

module.exports = async () => {
  const doctors = [
    {
      fullName: 'Ahmad Salah',
      email: 'ahmad@gmail.com',
      picture: 'https://image.freepik.com/free-photo/doctor-smiling-with-stethoscope_1154-36.jpg',
      gender: 'male',
      specialization: 'Pediatrics',
      birthDate: '1990/5/25',
    },
    {
      fullName: 'Cats',
      email: 'Cats@gmail.com',
      picture: 'https://hcplive.s3.amazonaws.com/v1_media/_image/happydoctor.jpg',
      gender: 'male',
      specialization: 'Surgery',
      birthDate: '1975/5/10',
    },
    {
      fullName: 'Angela',
      email: 'Angela@gmail.com',
      picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2y6VTwqxU7NhiV2jvfKP3Yonb4b0ABcUMMpwmum4UVuzNOxb_&usqp=CAU',
      gender: 'female',
      specialization: 'Cardiology',
      birthDate: '1970/5/25',
    },
    {
      fullName: 'Anas',
      email: 'Anas@gmail.com',
      picture: 'https://webcomicms.net/sites/default/files/clipart/174399/picture-doctor-174399-2506358.jpg',
      gender: 'male',
      specialization: 'Dentistry',
      birthDate: '1982/5/5',
    },
    {
      fullName: 'Melen',
      email: 'Melen@gmail.com',
      picture: 'https://atlantabodybalance.com/wp-content/uploads/2018/09/Car_Accident_Doctor.png',
      gender: 'female',
      specialization: 'Dermatology',
      birthDate: '1989/5/3',
    },
  ];
  await doctor.create(doctors);
};
