import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

function AvatarProduct(props) {
  return <Avatar size={45} icon={<UserOutlined />} />;
}

export default AvatarProduct;
