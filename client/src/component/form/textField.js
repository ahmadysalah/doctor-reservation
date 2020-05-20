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
  value: PropTypes.string,
  prefix: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
InputField.defaultProps = {
  placeholder: 'large size',
  className: 'textField',
  value: '',
  prefix: '',
};
export default InputField;
