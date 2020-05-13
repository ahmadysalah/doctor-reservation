import React from 'react';
import InputField from '../../component/form/textField';
import SelectBox from '../../component/form/selectBox';
import PickerDate from '../../component/form/calendar';
import './style.css';

const Reservation = () => (
  <div className="appointment">
    <InputField placeholder="aa" prefix />
    <SelectBox placeholder="aa" />
    <PickerDate />
  </div>
);

export default Reservation;
