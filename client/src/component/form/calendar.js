import React from 'react';
import { DatePicker } from 'antd';

import PropTypes from 'prop-types';
import './style.css';

const PickerDate = ({ onChange, placeholder, className, value }) => (
  <>
    <DatePicker
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size="large"
      className={className}
    />
  </>
);

PickerDate.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
PickerDate.defaultProps = {
  className: 'datePicker',
};

export default PickerDate;
