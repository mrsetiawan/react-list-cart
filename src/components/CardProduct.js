import React from 'react';
import { Card } from 'antd';
import { AreaChartOutlined } from '@ant-design/icons';
import Paragraph from './Paragraph';

function CardList({ data, description }) {
  const gridStyle = {
    width: '33.3%',
    textAlign: 'center',
    cursor: 'pointer',
    padding: '28px 5px 28px 5px'
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      {data.map((idx) => (
        <Card.Grid style={gridStyle} key={idx}>
          <AreaChartOutlined style={{ fontSize: '55px' }} />
          <br />
          <Paragraph description={description} />
        </Card.Grid>
      ))}
    </>
  );
}

export default CardList;
