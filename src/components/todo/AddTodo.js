/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Row, Col, Typography, Button
} from 'antd';
import Todos from '../../containers/Todos';
import FilterTodos from '../../containers/FilterTodo';
// eslint-disable-next-line react/prefer-stateless-function

const { Text } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
const AddTodo = ({ addTodo }) => {
  let input = null;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container">
      <Row>
        <Col lg={12} xs={24} offset={6} className="mt-15 mb-15">
          <Row justify="space-between">
            <Text>My Todo</Text>
            {' '}
            <FilterTodos />
          </Row>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col lg={12} xs={24}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              addTodo(input.value);
              input.value = '';
            }}
          >
            <Row>
              <Col lg={20} xs={16}>
                <input ref={(node) => (input = node)} />
              </Col>
              <Col lg={4} xs={8}>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Col>
            </Row>
          </form>
          <Todos />
        </Col>
      </Row>
    </div>
  );
};

export default AddTodo;