import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router, Route, Switch, Redirect } from 'react-router-dom';

import TodoApp from './components/TodoApp.jsx';
import firebase from './firebase/';
import Login from './components/Login.js';
import './styles/app.css';
import { startAddTodos } from './actions/actions.jsx';

var store = require('configureStore').configure();

const Wildcard = () => <Redirect to="/" />;

const auth = firebase.auth();


function PrivateRoute ({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: "/todos", state: { from: props.location }, authed }} />}
    />
  )
}

function PublicRoute ({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to="/dashboard" />}
    />
  )
}

store.dispatch(startAddTodos());

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
    };
  }

  componentDidMount() {
    console.log('didMount');
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        }, () => {
          console.log('callback from this.state.authed === true');
          console.log(this.state.authed);
        });
      } else {
        this.setState({
          authed: false,
        }, () => {
          console.log('callback from this.state.authed === false');
        });
      }
    });
  }

  componenteWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute authed={this.state.authed} path="/todos" component={TodoApp} />

          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
