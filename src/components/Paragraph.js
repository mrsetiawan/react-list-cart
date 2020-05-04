import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

function Paragraph(props) {

  return (
    <Text>{props.children}</Text>
  )
}

export default Paragraph;
