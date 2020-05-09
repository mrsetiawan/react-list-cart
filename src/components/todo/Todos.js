import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import Todo from './Todo';
import { toggleTodo } from '../../config/actions/toggleTodo';
// eslint-disable-next-line react/prefer-stateless-function
const Todos = ({ todos, toggleTodo }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <List
    size="large"
    bordered
    dataSource={todos}
    renderItem={(todo) =>
      <Todo key={todo.id} todo={todo} handleToggle={() => toggleTodo(todo.id)} />
    }
  />
);

const getTodoFilter = (todo, filter) => {
  switch (filter) {
    case "ALL":
      return todo
      break;
    default:
      throw new Error(`Filter tidak ditemukan ${filter}`)
  }
}

const mapStateToProps = (state) => ({
  todos: getTodoFilter(state.todos, state.filter)
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
