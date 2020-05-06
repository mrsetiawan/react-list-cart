/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { List } from 'antd';
import Price from './Price';
import AvatarProduct from './AvatarProduct';

function ListCart({ data, cart,total }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    cart ? (
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<AvatarProduct />}
              title={item.title}
              description={item.product_name}
            />
            <Price>100</Price>
          </List.Item>
        )}
      />
    )
      :
      // eslint-disable-next-line react/jsx-wrap-multilines
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<AvatarProduct />}
              title={item.product_name}
              description={item.product_name}
            />
            <Price>${item.product_price}</Price>
          </List.Item>
        )}
      />
  );
}

export default ListCart;
