var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

import style from '../styles/components/todoSearch.scss';


export var TodoSearch = React.createClass({
  render: function () {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <div>
          <input type="search" className="form-control" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
        <div>    
          <input type="checkbox" className="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
              dispatch(actions.toggleShowCompleted());
            }} id="showCompleted" className={style.checkboxWrapper}/>
          <label htmlFor="showCompleted" className={`label-primary ${style.completedTodos}`}>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(TodoSearch);
