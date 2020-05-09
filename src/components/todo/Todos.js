import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import Todo from './Todo';
import { toggleTodo } from '../../config/actions/toggleTodo';
// eslint-disable-next-line react/prefer-stateless-function
const Todos = ({ todos, dispatch }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <List
    size="large"
    bordered
    dataSource={todos}
    renderItem={(todo) => <Todo key={todo.id} todo={todo} handleToggle={() => dispatch(toggleTodo(todo.id))} />}
  />
);

const mapStateToProps = (state) => ({
  todos: state.todos
});

// const mapDispatchToProps = (dispatch) => ({
//   handleToggle: (id) => dispatch(toggleTodo(id))
// })

export default connect(mapStateToProps)(Todos);
