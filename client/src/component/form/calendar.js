import React from 'react';
import { DatePicker } from 'antd';

import PropTypes from 'prop-types';
import './style.css';

const PickerDate = ({ className, value }) => (
  <>
    <DatePicker value={value} size="large" className={className} />
  </>
);

PickerDate.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
};
PickerDate.defaultProps = {
  className: 'datePicker',
};

export default PickerDate;
