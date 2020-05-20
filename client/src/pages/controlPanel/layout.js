import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Reservation from './ReservationTable';
import imgLogo from '../../assets/img/logo.png';
import './style.css';
import logic from './logic';
import json from '../reservation/clinicData.json';

const { allReservation, allDoctors } = logic;
const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

const ControlPanel = ({ user: { picture, name } }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [doctors, setDoctors] = useState();
  const [key, setKey] = useState('1');
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    if (!doctors) {
      allDoctors().then(setDoctors);
    }
  }, [doctors]);

  // control panel layout full screen as it in ant design
  return (
    <div className="control">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />

          <Menu
            theme="dark"
            defaultSelectedKeys={['1']}
            mode="inline"
            title="Clinic App Control Panel"
          >
            <Menu.Item
              key="1"
              onClick={() => setKey('1')}
              icon={<PieChartOutlined />}
            >
              Statics
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => setKey('2')}
              icon={<DesktopOutlined />}
            >
              Reservation
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Doctors">
              {doctors &&
                doctors.map((doctorName) => (
                  <Menu.Item key={doctorName}>{doctorName}</Menu.Item>
                ))}
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Clinic">
              {json.clinics.map((clinic) => (
                <Menu.Item key={clinic}>{clinic}</Menu.Item>
              ))}
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              <Link to="/" className="cp__link">
                Preview
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background cp__container__header">
            <h2 className="cp__header">Clinic App Control Panel </h2>
            <p className="cp__p"> Welcome Back {name}</p>
            <img src={picture} alt="googleAvatar" className="avatar" />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {key === '1' && <h3> Statics</h3>}
              {key === '2' && <Reservation getData={() => allReservation()} />}
            </div>
          </Content>
          <Footer style={{ textAlign: 'right' }}>
            <img src={imgLogo} alt="logo" className="footer__logo" />
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default ControlPanel;
