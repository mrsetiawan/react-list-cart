import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducers from '../reducers/main';

const middelwares = applyMiddleware(reduxLogger, reduxThunk);

const store = createStore(
  rootReducers,
  middelwares
);

export default store;
