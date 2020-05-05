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

  render() {
    console.log(this.props.product)
    const qty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, , 15, 16, 17, 18, 19, 20];

    return (
      <div className="container">
        <Row>
          <Col span={14} className="left-content border-1px-gainsboro">
            <Row>
              <CardProduct data={qty} description="tes description" />
            </Row>
          </Col>
          <Col span={10} className="right-content">
            <Row>
              <Col span={24} className="card-list mb-15">
                <ListCart
                  data={[{ title: 'Ant Design Title 1' }]}
                  description="desc 1"
                />
              </Col>
              <Col span={24} className="mb-15">
                <Row>
                  <Col span={24} className="card-list mb-5">
                    <ListCart
                      data={[{ title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }]}
                      description="desc 2"
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={24} className="card-list bb-1">
                <Title level={3} type="secondary" className="mb-0">Cart</Title>
              </Col>
              <Col span={24} className="card-list mb-15">
                <ListCart
                  data={[{ title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }]}
                />
              </Col>
              <Col span={24} className="card-list fixed-bottom">
                <ListCart
                  data={[{ title: 'Total' }]}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product
})

const mapDispatchToProps = dispatch => dispatch(getProductList)

export default connect(mapStateToProps,mapDispatchToProps)(Main);
