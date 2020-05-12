import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import imgLogo from '../../assets/img/logo.png';

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
      </ul>
    </div>
  </div>
);

export default Header;
