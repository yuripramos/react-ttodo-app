import React from 'react';
import * as Redux from 'react-redux';
import * as actions from '../actions/actions.jsx';

import pageActions from '../styles/components/page_actions.scss';

const Login = ({ dispatch }) => {
  const onLogin = () => {
    console.log(dispatch);
    dispatch(actions.startLogin());
  };
  return (
    <div className="">
      <h1 className="page-title">TTodo App</h1>
      <div className="row">
        <div className="col-lg-6-offset-3 text-center">
          <div className={pageActions.boxLogin}>
            <h3>Login</h3>
            <p>
              Login with GitHub Account Below
            </p>
            <button className="btn btn-primary btn-login" onClick={onLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redux.connect()(Login);
