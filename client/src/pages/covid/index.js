import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';
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
  return <div className="news">{news && <ListNews news={news} />}</div>;
};
export default CovidNews;
