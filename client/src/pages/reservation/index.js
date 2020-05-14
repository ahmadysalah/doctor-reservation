import React, { useState, useEffect } from 'react';
import { Button, message } from 'antd';
import logic from './logic';
import InputField from '../../component/form/textField';
import SelectBox from '../../component/form/selectBox';
import PickerDate from '../../component/form/calendar';
import formImg from '../../assets/img/service.png';
import json from './clinicData.json';
import './style.css';

const { doctorsName, postReservation } = logic;
const key = 'updatable';

// message alert
const openMessage = (msg) => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: msg, key, duration: 2 });
  }, 1000);
};
const Reservation = () => {
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [bookDate, setBookDate] = useState();
  const [clinic, setClinic] = useState();
  const [doctors, setDoctors] = useState();
  const [time, setTime] = useState();
  const [doctorsItem, setDoctorsItem] = useState();
  const [date, pickDate] = useState();

  const clearState = () => {
    setName('');
    setGender('');
    setBookDate('');
    setClinic('');
    setDoctors('');
    setTime('');
  };
  useEffect(() => {
    if (clinic) {
      doctorsName(clinic).then(setDoctorsItem);
    }
  }, [clinic]);

  return (
    <div className="appointment">
      <div>
        <InputField
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Insert Your Name Please"
          prefix
        />
        <SelectBox
          value={gender}
          setValue={(value) => setGender(value)}
          placeholder="Gender"
          items={['male', 'female']}
        />
        <SelectBox
          value={clinic}
          setValue={(value) => setClinic(value)}
          placeholder="Select Clinic"
          items={json.clinics}
        />
        <SelectBox
          value={doctors}
          items={doctorsItem}
          setValue={(value) => setDoctors(value)}
          placeholder="Chose your doctor"
        />
        <PickerDate
          value={bookDate}
          placeholder="Please Pick date "
          onChange={(date, dateString) => {
            pickDate(dateString);
            setBookDate(date, dateString);
          }}
        />
        <SelectBox
          value={time}
          setValue={(value) => setTime(value)}
          placeholder="Pick the time"
          items={json.time}
        />
        <Button
          className="book__btn"
          onClick={() =>
            postReservation(name, gender, clinic, doctors, date, time).then(
              (msg) => {
                openMessage(msg);
                clearState();
              }
            )
          }
        >
          Book Now
        </Button>
        <Button className="book__reset" onClick={() => clearState()}>
          Reset
        </Button>
      </div>

      <div>
        <img className="appointment__img" src={formImg} alt="formImg" />
      </div>
    </div>
  );
};

export default Reservation;
