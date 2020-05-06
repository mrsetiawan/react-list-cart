import { combineReducers } from 'redux';
import productListReducers from './productListReducers.js';

const rootReducers = combineReducers({
  product: productListReducers
});

export default rootReducers;