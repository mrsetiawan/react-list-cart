/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Typography } from 'antd';
import CardProduct from './CardProduct';
import ListCart from './ListCart';
import { getProductList } from '../config/actions/getProductList';

const { Title } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  // componentDidMount(){
  //   this.props.dispatch(getProductList())
  // }

  render() {
    return (
      <div className="container">
        <Row gutter={{ xs: 15 }}>
          <Col lg={14} sm={12} xs={24} className="left-content border-1px-gainsboro">
            <Row>
              <CardProduct
                data={this.props.product}
              />
            </Row>
          </Col>
          <Col lg={10} sm={12} xs={24} className="right-content">
            <Row>
              <Col lg={24} sm={12} xs={24} className="card-list mb-15">
                <ListCart
                  data={[{ title: 'Ant Design Title 1' }]}
                  cart="cart"
                />
              </Col>
              <Col span={24} className="mb-15">
                {/* <Row>
                  <Col span={24} className="card-list mb-5">
                    <ListCart
                      data={priceInCart}
                    />
                  </Col>
                </Row> */}
              </Col>
              <Col span={24} className="card-list bb-1">
                <Title level={3} type="secondary" className="mb-0">Cart</Title>
              </Col>
              <Col span={24} className="card-list mb-15">
                <ListCart
                  data={[{ title: 'Ant Design Title 1' }]}
                  cart="cart"
                />
              </Col>
              <Col span={24} className="card-list fixed-bottom">
                <ListCart
                  data={[{ title: 'Total' }]}
                  total="total"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product
});

// const mapDispatcToProps = (dispatch) => dispatch(getProductList())

export default connect(mapStateToProps, null)(Main);