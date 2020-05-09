import { combineReducers } from 'redux';
import productListReducers from './productListReducers.js';
import todoReducers from './todoReducer.js';

const rootReducers = combineReducers({
  product: productListReducers,
  todos: todoReducers
});

export default rootReducers;