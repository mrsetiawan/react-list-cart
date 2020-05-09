import React from 'react';
import { List } from 'antd';

const Todo = ({ todo, handleToggle }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <List.Item style={{ textDecoration: todo.complete ? 'line-through' : 'none', cursor: 'pointer' }} onClick={handleToggle}>
    {todo.id + 1}
    {' '}
&nbsp;
    {todo.text}
  </List.Item>
);

export default Todo;
