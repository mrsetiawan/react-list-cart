import React from 'react';
import { Row, Col } from 'antd';

function ExampleGridAnt() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container">
      <Row>
        <Col span={24}>
          <div className="grid-children">
            col-24
          </div>
        </Col>
      </Row>
      <Row>
        {[0, 1].map((idx) => (
          <Col span={12} key={idx}>
            <div className="grid-children">
              col-12
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        {[0, 1, 2, 3].map((idx) => (
          <Col span={6} key={idx}>
            <div className="grid-children">
              col-6
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        {[0, 1, 2, 3, 4, 5].map((idx) => (
          <Col span={4} key={idx}>
            <div className="grid-children">
              col-4
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((idx) => (
          <Col span={2} key={idx}>
            <div className="grid-children">
              col-2
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23].map((idx) => (
          <Col span={1} key={idx}>
            <div className="grid-children">
              {idx + 1}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ExampleGridAnt;
