import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Text } = Typography;

function Paragraph(props) {

  return (
    <Text>{props.description}</Text>
  )
}

Paragraph.propTypes = {
  desciption: PropTypes.string
}

Paragraph.defaultProps = {
  description: "deskripsi"
}
export default Paragraph;
