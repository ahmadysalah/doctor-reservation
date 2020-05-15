import React, { useState, useEffect } from 'react';
import './style.css';
import { LoadingOutlined } from '@ant-design/icons';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { Alert } from 'antd';
import ControlPanel from './layout';
import imgLogo from '../../assets/img/logo.png';

const ControlPanelLayout = () => {
  const [user, setUser] = useState({ admin: false });
  const [waite, setWait] = useState(true);

  const successResponse = (response) => {
    const { tokenId } = response;
    axios
      .post('/api/v1/login/google', { tokenId })
      .then(({ data }) => setUser(data))
      .catch();
  };

  const failureResponse = (response) => {
    setUser({ admin: false });
  };

  useEffect(() => {
    setTimeout(() => {
      setWait(false);
    }, 2000);
  });
  return (
    <>
      {!user ||
        (!user.admin && (
          <div className="login_container">
            <div className="login">
              <img src={imgLogo} alt="logo" className="footer__logo" />
              <h2 className="login_header"> Sign In By google</h2>
              <div className="spin__container">
                {waite && (
                  <LoadingOutlined
                    style={{ fontSize: 50 }}
                    spin
                    className="spin"
                  />
                )}
                {!waite && user && !user.admin && (
                  <Alert
                    message="Warning"
                    description="You are not authorize"
                    type="warning"
                    showIcon
                  />
                )}
              </div>
              <GoogleLogin
                clientId="648259922813-6ifn05k568h6p6fq0qvv8b1bvbj04472.apps.googleusercontent.com"
                onSuccess={successResponse}
                onFailure={failureResponse}
                cookiePolicy="single_host_origin"
                isSignedIn
                className="google__btn"
                disabled={waite}
              />
            </div>
          </div>
        ))}
      {user && user.admin && <ControlPanel user={user} />}
    </>
  );
};
export default ControlPanelLayout;
