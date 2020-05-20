import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDataAction } from '../config/actions/getDataAction';
import { Row, Col, Card } from 'antd';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';

const { Meta } = Card;

// eslint-disable-next-line react/prefer-stateless-function
class getExampleData extends Component {

  componentDidMount() {
    this.props.dispatch(getDataAction());
  }

  render() {

    const { resData } = this.props
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div className="container">
        <Row>
          {resData.map(dataPhoto => {
            console.log(dataPhoto.thumbnailUrl);
            return (
              <LazyLoadComponent>
                <Col lg={6} key={dataPhoto.id} style={{ padding: '15px' }}>
                  <Card
                    style={{ width: 300 }}
                    cover={
                      <LazyLoadImage
                        key={dataPhoto.id}
                        src={dataPhoto.thumbnailUrl}
                        effect="blur"
                      />
                    }
                  >
                    <Meta
                      title={dataPhoto.title}
                    />
                  </Card>
                </Col>
              </LazyLoadComponent>
            )
          })}
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  resData: state.getData.data
});

export default connect(mapStateToProps, null)(getExampleData);