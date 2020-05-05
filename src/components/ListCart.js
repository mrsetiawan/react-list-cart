import React from 'react';
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Price from './Price';
import AvatarProduct from './AvatarProduct';

function ListCart({ data, description }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          {description
            // eslint-disable-next-line react/jsx-wrap-multilines
            ? <List.Item.Meta
              avatar={<AvatarProduct />}
              title={item.title}
              description={description}
            /> : <List.Item.Meta title={item.title} />}
          <Price>Content</Price>
        </List.Item>
      )}
    />
  );
}

export default ListCart;
