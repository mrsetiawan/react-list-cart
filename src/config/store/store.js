import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import rootReducers from '../reducers/main';

const middelwares = applyMiddleware(reduxLogger);

const store = createStore(
  rootReducers,
  middelwares
);

export default store;
