/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import Todo from './Todo';
import { fetchTodos } from '../../config/actions/fetchTodos';
import { toggleTodo } from '../../config/actions/toggleTodo';
// ini adalah contoh presentational component atau bisa disebut sebuah view
class Todos extends Component {

  componentDidMount() {
    this.props.dispatch(fetchTodos());
  }

  render() {
    const { todos,loading,error } = this.props;

    if(loading) return <div style={{padding: '3rem',textAlign: 'center'}}>loading...</div>

    if(error) return <div style={{padding: '3rem',textAlign: 'center'}}>API error...</div>

    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <List
        size="large"
        bordered
        dataSource={todos}
        renderItem={(todo) => <Todo key={todo.id} todo={todo} handleToggle={() => this.props.dispatch(toggleTodo(todo.id))} />}
      />
    )
  }
}

const getTodoFilter = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos;
    case 'COMPLETED':
      return todos.filter((todo) => todo.complete);
    case 'ACTIVE':
      return todos.filter((todo) => !todo.complete);
    default:
      throw new Error(`Filter tidak ditemukan ${filter}`);
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getTodoFilter(state.todos.data, state.filter),
    loading: state.todos.loading,
    error: state.todos.error
  }
};

export default connect(mapStateToProps, null)(Todos);
