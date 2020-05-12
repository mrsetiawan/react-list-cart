/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { List } from 'antd';
import Todo from './Todo';
import { fetchTodos } from '../../config/actions/fetchTodos';
// ini adalah contoh presentational component atau bisa disebut sebuah view
class Todos extends Component {

  componentDidMount(){
    this.props.dispatch(fetchTodos())
  }

  render() {
    const { todos, toggleTodo } = this.props;
    console.log(todos)
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <List
        size="large"
        bordered
        dataSource={todos}
        renderItem={(todo) => <Todo key={todo.id} todo={todo} handleToggle={() => toggleTodo(todo.id)} />}
      />
    )
  }

}

export default Todos;
