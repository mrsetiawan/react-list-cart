import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

// const Main = lazy(() => import('./components/Main'));
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    );
  }
}

export default App;