import { connect } from 'react-redux';
import { setFilter } from '../config/actions/setFilter';
import FilterTodos from '../components/todo/FilterTodos';

// container component/controller filterTodo
const mapDispatchToProps = (dispatch) => ({
  filter: (val) => dispatch(setFilter(val))
});

export default connect(null, mapDispatchToProps)(FilterTodos);