import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState();

  const successResponse = (response) => {
    const { tokenId } = response;
    axios
      .post('/api/v1/login/google', { tokenId })
      .then(({ data }) => setUser(data))
      .catch();
  };

  const failureResponse = (response) => {
    console.log('error', response);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        {!user && (
          <GoogleLogin
            clientId="648259922813-6ifn05k568h6p6fq0qvv8b1bvbj04472.apps.googleusercontent.com"
            render={(renderProps) => (
              <p onClick={renderProps.onClick} disabled={renderProps.disabled}>
                Login by Google{' '}
              </p>
            )}
            onSuccess={successResponse}
            onFailure={failureResponse}
            cookiePolicy="single_host_origin"
            isSignedIn
          />
        )}
      </Menu.Item>
      {user && user.admin && (
        <Menu.Item>
          <Link to="/CP" className="link">
            Control Panel
          </Link>
        </Menu.Item>
      )}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      {user ? (
        <img src={user.picture} alt="googleAvatar" className="avatar" />
      ) : (
        <Avatar size={30} icon={<UserOutlined />} />
      )}
    </Dropdown>
  );
};
export default Login;
