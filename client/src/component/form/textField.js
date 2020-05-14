import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './style.css';

const InputField = ({ onChange, placeholder, className, value, prefix }) => (
  <>
    <Input
      onChange={onChange}
      size="large"
      className={className}
      value={value}
      placeholder={placeholder}
      prefix={prefix && <UserOutlined />}
    />
  </>
);

InputField.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  onChange: PropTypes.string.isRequired,
};
InputField.defaultProps = {
  placeholder: 'large size',
  className: 'textField',
  prefix: '',
};
export default InputField;
