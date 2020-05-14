import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;
const selectData = ({ items, setValue, placeholder, className, value }) => (
  <div>
    <Select
      value={value}
      showSearch
      size="large"
      className={className}
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={(value) => setValue(value)}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {items.map((item) => (
        <Option value={item} key={item}>
          {item}
        </Option>
      ))}
    </Select>
  </div>
);

selectData.propTypes = {
  items: PropTypes.node,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
};
selectData.defaultProps = {
  items: [],
  setValue: () => {},
  placeholder: '',
  className: 'selectBox',
  value: '',
};
export default selectData;
