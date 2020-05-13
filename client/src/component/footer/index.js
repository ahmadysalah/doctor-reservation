import React from 'react';
import {
  FacebookFilled,
  InstagramFilled,
  GoogleCircleFilled,
  TwitterCircleFilled,
} from '@ant-design/icons';
import './style.css';

const Footer = () => (
  <div className="footer">
    <div>
      <p>
        Copyright ©2020 All rights reserved | This website is made by Ahmad
        Salah
      </p>
    </div>
    <div className="social">
      <FacebookFilled />
      <TwitterCircleFilled />
      <GoogleCircleFilled />
      <InstagramFilled />
    </div>
  </div>
);
export default Footer;
