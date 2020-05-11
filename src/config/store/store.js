import { createStore, applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import rootReducers from '../reducers/main';

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(
      reduxLogger, reduxThunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
