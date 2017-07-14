var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from './components/Login.js';

import './styles/app.css';

const Wildcard = () => <Redirect to="/" />;

store.dispatch(actions.startAddTodos());

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
