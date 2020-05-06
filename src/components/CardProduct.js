import React from 'react';
import { Card } from 'antd';
import CardDesc from './CardDesc';

function CardProduct({ data }) {
  const gridStyle = {
    width: '33.3%',
    cursor: 'pointer',
    padding: '28px 5px 28px 5px'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    backgroundPosition: '50% 50%',
    objectFit: 'cover'
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      {data.product.map((res) => (
        <Card.Grid style={gridStyle} key={res.id}>
          <img src={res.product_image} alt={res.product_name} style={imageStyle} />
          <br />
          <CardDesc description={res.product_name} price={res.product_price} />
        </Card.Grid>
      ))}
    </>
  );
}

export default CardProduct;
