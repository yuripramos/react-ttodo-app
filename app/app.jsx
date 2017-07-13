var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import './styles/app.css';


store.dispatch(actions.startAddTodos());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);