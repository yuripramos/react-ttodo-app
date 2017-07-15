import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import TodoApp from './components/TodoApp.jsx';
import Login from './components/Login.js';
import './styles/app.css';
import { startAddTodos } from './actions/actions.jsx';

var store = require('configureStore').configure();

const Wildcard = () => <Redirect to="/" />;

store.dispatch(startAddTodos());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/todos" component={TodoApp} />
        <Route exact path="/*" render={Wildcard} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);
