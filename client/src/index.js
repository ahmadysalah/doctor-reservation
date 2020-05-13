import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import Footer from './component/footer';
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
