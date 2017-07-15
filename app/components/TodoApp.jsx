import React from 'react';
import moment from 'moment';
import * as Redux from 'react-redux';
import * as actions from '../actions/actions.jsx';
import TodoList from './TodoList.jsx'
import AddTodo from './AddTodo.jsx';
import TodoSearch from './TodoSearch.jsx';
import svgUrl from '../assets/svg/todo.svg';
import Typist from 'react-typist';
import pageActions from '../styles/components/page_actions.scss';

export var TodoApp = React.createClass({
  onLogout(e) {
    e.preventDefault();
    const { dispatch } = this.props;

    dispatch(actions.startLogout());
  },
  render() {
    return (
      <div>
        <div className={pageActions.logout}><a href="#" onClick={this.onLogout}>Logout</a></div>
        <div className="container text-center">
          <div className="logo">
            <img src={svgUrl}/>
            <Typist cursor={{hideWhenDone: true}}> <h1 className="page-title">TTodo App</h1> </Typist>
          </div>
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 todoBoxWrapper">
              <TodoSearch/>
              <div className="">
                <TodoList/>
              </div>
              <AddTodo/>
            </div>
        </div>
      </div>
    )
  }
});

export default Redux.connect()(TodoApp);
