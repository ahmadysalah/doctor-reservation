import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import imgLogo from '../../assets/img/logo.png';

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/" className="link">
        Log In
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/CP" className="link">
        Control Panel
      </Link>
    </Menu.Item>
  </Menu>
);
const Header = () => (
  <div className="header">
    <div>
      <img src={imgLogo} alt="logo" />
    </div>
    <div>
      <ul className="navbar">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/doctors" className="link">
            Doctors
          </Link>
        </li>
        <li>
          <Link to="/reservation" className="link">
            Reservation
          </Link>
        </li>
        <li>
          <Link to="/Covid" className="link">
            Covid-19
          </Link>
        </li>
        <li>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Avatar size={30} icon={<UserOutlined />} />
          </Dropdown>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
