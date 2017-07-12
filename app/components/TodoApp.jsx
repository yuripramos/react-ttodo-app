import React from 'react';
import  uuid from 'node-uuid';
import moment from 'moment';  
import TodoList from './TodoList.jsx'
import AddTodo from './AddTodo.jsx';
import TodoSearch from './TodoSearch.jsx';
import svgUrl from '../assets/svg/todo.svg';
import Typist from 'react-typist';

var TodoApp = React.createClass({
  render: function () {
    return (
      <div>
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

module.exports = TodoApp;
