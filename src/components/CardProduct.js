/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { connect } from 'react-redux';
import { Card } from 'antd';
// import { getProductList } from '../config/actions/getProductList';
import CardDesc from './CardDesc';

const CardProduct = ({ data }) => {
  const imageStyle = {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    backgroundPosition: '50% 50%',
    objectFit: 'cover'
  };

  // const handleClick = (id) => handleClickDetail(id);

  return (
    <>
      {data.product.map((res) => (
        <Card.Grid key={res.id}>
          <img src={res.product_image} alt={res.product_name} style={imageStyle} />
          <br />
          <CardDesc description={res.product_name} price={res.product_price} />
        </Card.Grid>
      ))}
    </>
  );
};

export default CardProduct;


// const CardProduct = (props) => {
//   const gridStyle = {
//     width: '33.3%',
//     cursor: 'pointer',
//     padding: '28px 5px 28px 5px'
//   };

//   const imageStyle = {
//     width: '100%',
//     height: '200px',
//     overflow: 'hidden',
//     backgroundPosition: '50% 50%',
//     objectFit: 'cover'
//   };

//   // eslint-disable-next-line react/prop-types
//   const { product } = props;

//   return (
//     <>
//       {product.product.map((res) => (
//         <Card.Grid style={gridStyle} key={res.id}>
//           <img src={res.product_image} alt={res.product_name} style={imageStyle} />
//           <br />
//           <CardDesc description={res.product_name} price={res.product_price} />
//         </Card.Grid>
//       ))}
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   product: state.product
// });

// const mapDispatchToProps = (dispatch) => dispatch(getProductList);

// export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);
