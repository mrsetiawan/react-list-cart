import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    );
  }
}

export default App;