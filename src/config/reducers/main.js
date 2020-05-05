import { combineReducers } from 'redux';
import productListReducers from '../reducers/productListReducers.js';

const rootReducers = combineReducers({
  product: productListReducers
});

export default rootReducers;