import { connect } from 'react-redux';
import { addTodoAction } from '../config/actions/addTodoAction';
import AddTodo from '../components/todo/AddTodo';

// container component/controller AddTodos
const mapDispatchToProps = (dispatch) => ({
  addTodo: (val) => dispatch(addTodoAction(val))
});

export default connect(null, mapDispatchToProps)(AddTodo);