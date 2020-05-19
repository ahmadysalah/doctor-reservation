import React from 'react';
import './style.css';
import aboutUsIMg from '../../assets/img/aboutUs.png';
import Emergency from '../../assets/img/emergency.svg';
import Appointment from '../../assets/img/appointment.svg';
import Qualfied from '../../assets/img/qualified.svg';

const Doctors = () => (
  <div className="about__us">
    <div className="about__left">
      <img src={aboutUsIMg} alt="about-us" />
    </div>
    <div className="about__right">
      <h3 className="about__header">About us</h3>
      <p className="about__paragraph">
        This application created to help people how cant went to the clinic,
        start reservation online by one of our clinic by choosing the doctor you
        want from the clinic beside that you can add the appointment to our
        database and our back office well call you soon.
      </p>
      <div className="about__adv">
        <li>
          <img className="adv__info" src={Emergency} alt="about-us" />
          <h4> Emergency</h4>
        </li>
        <li id="adv__center">
          <img className="adv__info" src={Appointment} alt="about-us" />{' '}
          <h4> Emergency</h4>
        </li>
        <li>
          <img className="adv__info" src={Qualfied} alt="about-us" />{' '}
          <h4> Emergency</h4>
        </li>
      </div>
    </div>
  </div>
);
export default Doctors;
