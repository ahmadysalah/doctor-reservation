import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import ListNews from '../../component/listNews';

const CovidNews = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      const {
        data: {
          data: { articles },
        },
      } = await axios.get('/api/v1/news');
      setNews(articles);
    };
    if (!news) fetchData();
    return () => source.cancel();
  });
  return (
    <div className="news">
      {news ? (
        <ListNews news={news} />
      ) : (
        <LoadingOutlined
          style={{ fontSize: 80, paddingTop: '12%' }}
          spin
          className="spin"
        />
      )}
    </div>
  );
};
export default CovidNews;
