/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import AddTodos from './components/todo/AddTodo';
import './App.css';

const App = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/todo" component={AddTodos} />
  </Switch>
);

export default App;