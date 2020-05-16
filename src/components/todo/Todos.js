/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import Todo from './Todo';
import { fetchTodos } from '../../config/actions/fetchTodos';
import { toggleTodo } from '../../config/actions/toggleTodo'
// ini adalah contoh presentational component atau bisa disebut sebuah view
class Todos extends Component {

  // componentDidMount(){
  //   this.props.dispatch(fetchTodos())
  // }

  render() {
    const { todos, toggleTodo } = this.props;
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

const getTodoFilter = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos;
      break;
    case 'COMPLETED':
      return todos.filter((todo) => todo.complete);
      break;
    case 'ACTIVE':
      return todos.filter((todo) => !todo.complete);
      break;
    default:
      throw new Error(`Filter tidak ditemukan ${filter}`);
  }
};

const mapStateToProps = (state) => ({
  todos: getTodoFilter(state.todos, state.filter)
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (val) => dispatch(toggleTodo(val))
})

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
