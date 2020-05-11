import { connect } from 'react-redux';
import { toggleTodo } from '../config/actions/toggleTodo';
import Todos from '../components/todo/Todos';
// ini adalah contoh container component atau bisa disebut controller
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
  toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);