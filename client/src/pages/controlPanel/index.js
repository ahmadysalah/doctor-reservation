import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Reservation from './allReservation';
import imgLogo from '../../assets/img/logo.png';
import './style.css';

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

const ControlPanel = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState('1');
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <div className="control">
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item
              key="1"
              onClick={() => setKey('1')}
              icon={<PieChartOutlined />}
            >
              Reservation{' '}
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => setKey('2')}
              icon={<DesktopOutlined />}
            >
              Add Doctor{' '}
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Doctors">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Clinic">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              <Link to="/" className="cp__link">
                Preview
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {key === '1' && <Reservation />}
              {key === '2' && <p> 2</p>}
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
