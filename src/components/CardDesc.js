import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import Price from './Price';

const { Text } = Typography;

function CardDesc(props) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="card-desc">
      <Text>{props.description}</Text>
      {' '}
      <Text>
        $
        {props.price}
      </Text>
    </div>
  );
}

CardDesc.propTypes = {
  desciption: PropTypes.string
};

CardDesc.defaultProps = {
  description: 'deskripsi'
};
export default CardDesc;
