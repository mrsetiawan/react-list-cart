import { combineReducers } from 'redux';
import productListReducers from './productListReducers.js';
import todoReducers from './todoReducer.js';
import filterReducers from './filterTodos';
import getData from './getData'

const rootReducers = combineReducers({
  product: productListReducers,
  todos: todoReducers,
  filter: filterReducers,
  getData: getData
});

export default rootReducers;