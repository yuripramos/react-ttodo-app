var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import style from '../styles/components/addTodo.scss';

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="form-control" ref="todoText" placeholder="What do you need to do?"/>
          <button className={`btn btn-primary ${style.button}`}>Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
