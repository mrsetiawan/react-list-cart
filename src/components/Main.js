import React, { Component } from 'react';
import {
  Row, Col, Typography, Avatar, List, Card
} from 'antd';
import { UserOutlined, AreaChartOutlined } from '@ant-design/icons';
import Paragraph from './Paragraph';

const { Title } = Typography;

class Main extends Component {

  render() {

    const gridStyle = {
      width: '33.3%',
      textAlign: 'center',
      cursor: 'pointer',
      padding: '28px 5px 28px 5px'
    };

    const qty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,, 15, 16, 17, 18, 19, 20];

    return (
      <div className="container">
        <Row>
          <Col span={14} className="left-content border-1px-gainsboro">
            <Row>
              {qty.map((idx) => (
                <Card.Grid style={gridStyle} key={idx}>
                  <AreaChartOutlined style={{ fontSize: '55px' }} />
                  <br />
                  <Paragraph description="tes" />
                  {/* <abbr title="muhamad rahmat setiawan">nama</abbr> */}

                </Card.Grid>
              ))}
            </Row>
          </Col>
          <Col span={10} className="right-content">
            <Row>
              <Col span={24} className="card-list mb-15">
                <List
                  itemLayout="horizontal"
                  dataSource={[{ title: 'Ant Design Title 1' }]}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar size={45} icon={<UserOutlined />} />}
                        title={item.title}
                        description="Ant Design, a design language"
                      />
                      <div>Content</div>
                    </List.Item>
                  )}
                />
              </Col>

              <Col span={24} className="mb-15">
                <Row>
                  <Col span={24} className="card-list mb-5">
                    <List
                      itemLayout="horizontal"
                      dataSource={[{ title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }]}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<Avatar size={45} icon={<UserOutlined />} />}
                            title={item.title}
                            description="Ant Design, a design language"
                          />
                          <div>Content</div>
                        </List.Item>
                      )}
                    />
                  </Col>
                </Row>
              </Col>

              <Col span={24} className="card-list bb-1">
                <Title level={3} type="secondary" className="mb-0">Cart</Title>
              </Col>

              <Col span={24} className="card-list mb-15">
                <List
                  itemLayout="horizontal"
                  dataSource={[{ title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }, { title: 'Ant Design Title 1' }]}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                      />
                      <div>Content</div>
                    </List.Item>
                  )}
                />
              </Col>

              <Col span={24} className="card-list fixed-bottom">
                <List
                  itemLayout="horizontal"
                  dataSource={[{ title: 'Total' }]}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.title}
                      />
                      <div>Content</div>
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
