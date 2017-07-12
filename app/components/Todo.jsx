var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');
import style from '../styles/components/_todo.scss';

export var Todo = React.createClass({
  render: function () {
    var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(actions.startToggleTodo(id, !completed));
        }}>
        <li className={`list-group-item ${style.listStyle}`}>
          <div className={style.checkboxWrapper}>
            <input id="someSwitchOptionPrimary" checked={completed} type="checkbox"/>
            <label htmlFor="someSwitchOptionPrimary" className="label-primary"></label>
          </div>
          <div className={style.wrapperTasks}>
            <div className={style.todoTitle}>{text}</div>
            <div className={style.todo__subtext}>{renderDate()}</div>
          </div>
        </li>
      </div>
    )
  }
});

export default connect()(Todo);
