import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import axios from 'axios';

const { Meta } = Card;
// make a card class as it in ant design
class CardContainer extends React.Component {
  state = {
    data: '',
  };

  componentDidMount = async () => {
    try {
      const data = await axios.get('/api/v1/doctors');
      this.setState(data);
    } catch (e) {
      this.setState({ data: 'No Data' });
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div className="doctors">
        {data &&
          data.map(({ _id, fullName, picture, specialization }) => (
            <Card
              hoverable
              style={{ width: 300, margin: '2rem', padding: '1rem' }}
              key={_id}
              cover={<img src={picture} className="card__img" alt={fullName} />}
            >
              <Meta title={`Doctor ${fullName}`} description={specialization} />
            </Card>
          ))}
      </div>
    );
  }
}

export default CardContainer;
