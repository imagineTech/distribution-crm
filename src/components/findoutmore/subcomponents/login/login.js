/*
  The Login component, uses redux for state management
  on email and password, and action calls for sending it
  to firebase
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataToLoginWith, loginWithEmailAndPassword } from '../../../../actions/loginAuth';

class Login extends Component {

  handleChange = e => {
    this.props.emailAndPasswordChange(e.target.name, e.target.value);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.emailAndPasswordLogin(this.props.emailAndPassword.login_email, this.props.emailAndPassword.login_password);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="login_email">Email: </label>
            <input type="text" name="login_email" id="login_email" onChange={this.handleChange}/>
          <label htmlFor="login_password">Password: </label>
            <input type="password" id="login_password" name="login_password" onChange={this.handleChange} />
          <button>Login</button>
        </form>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    emailAndPassword: state.emailAndPasswordToState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    emailAndPasswordChange: (name, value) => dispatch(dataToLoginWith(name, value)),
    emailAndPasswordLogin: (email, password) => dispatch(loginWithEmailAndPassword(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
