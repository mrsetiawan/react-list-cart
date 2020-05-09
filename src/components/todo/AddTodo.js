/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import Todos from './Todos';
import { connect } from 'react-redux';
import { addTodoAction } from '../../config/actions/addTodoAction';
// eslint-disable-next-line react/prefer-stateless-function

const { Title } = Typography;

// eslint-disable-next-line react/prefer-stateless-function
const AddTodo = ({ dispatch }) => {
  let input = null

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container">
      <Row justify="space-around" align="middle">
        <Col span={12} style={{ textAlign: "center" }}>
          <Title>My Todo</Title>
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={12}>
          <form
            onSubmit={e => {
              e.preventDefault()
              if (!input.value.trim()) {
                return
              }
              dispatch(addTodoAction(input.value))
              input.value = ""
            }}
          >
            <Row >
              <Col span={20}>
                <input ref={node => (input = node)} />
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
}

export default connect()(AddTodo);
