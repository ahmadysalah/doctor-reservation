import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const ListNews = ({ news }) => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {},
      pageSize: 5,
    }}
    dataSource={news}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText
            icon={StarOutlined}
            text="156"
            key="list-vertical-star-o"
          />,
          <IconText
            icon={LikeOutlined}
            text="156"
            key="list-vertical-like-o"
          />,
          <IconText
            icon={MessageOutlined}
            text={item.publishedAt.split('T')[0]}
            key="list-vertical-message"
          />,
        ]}
        extra={<img width={272} alt="logo" src={item.urlToImage} />}
      >
        <List.Item.Meta
          avatar={
            <Avatar
              style={{
                backgroundColor:
                  ColorList[Math.floor(Math.random() * ColorList.length)],
                verticalAlign: 'middle',
              }}
              size="large"
            >
              {item.author
                .split('')[0]
                .concat(item.author.split('')[1])
                .toUpperCase()}
            </Avatar>
          }
          title={
            <a target="_blank" rel="noopener noreferrer" href={item.url}>
              {item.author}
            </a>
          }
          description={item.description.split('.')[0]}
        />
        {item.content.split('.')[0].concat(item.content.split('.')[1])}
      </List.Item>
    )}
  />
);
ListNews.propTypes = {
  news: PropTypes.arrayOf(String).isRequired,
};

export default ListNews;
