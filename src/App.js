/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import AddTodos from './containers/AddTodo';
import getExampleDate from './components/getExampleData';
import './App.css';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={AddTodos} />
      <Route path="/list" component={Main} />
      <Route path="/example-get" component={getExampleDate} />
    </Switch>
  ) 
};

export default App;