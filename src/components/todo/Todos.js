import React from 'react';
import { List } from 'antd';
import Todo from './Todo';
// eslint-disable-next-line react/prefer-stateless-function
// ini adalah contoh presentational component atau bisa disebut sebuah view
const Todos = ({ todos, toggleTodo }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <List
    size="large"
    bordered
    dataSource={todos}
    renderItem={(todo) => <Todo key={todo.id} todo={todo} handleToggle={() => toggleTodo(todo.id)} />}
  />
);

export default Todos;
