/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Row, Col, Typography, Button
} from 'antd';
import { connect } from 'react-redux';
import Todos from './Todos';
import { addTodoAction } from '../../config/actions/addTodoAction';
import FilterTodos from './FilterTodos';
// eslint-disable-next-line react/prefer-stateless-function

const { Text } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
const AddTodo = ({ dispatch }) => {
  let input = null;

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container">
      <Row>
        <Col span={12} offset={6} className="mt-15 mb-15">
          <Row justify="space-between">
            <Text>My Todo</Text>
            {' '}
            <FilterTodos />
          </Row>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={12}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              dispatch(addTodoAction(input.value));
              input.value = '';
            }}
          >
            <Row>
              <Col span={20}>
                <input ref={(node) => (input = node)} />
              </Col>
              <Col span={4}>
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

export default connect()(AddTodo);