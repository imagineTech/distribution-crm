/*
  The Login component, uses redux for state management
  on email and password, and action calls for sending it
  to firebase
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { dataToLoginWith, loginWithEmailAndPassword } from '../../../../actions/loginAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorComponent from'./subcomponents/Error';
import * as routes from '../../../../constants/routes';

class Login extends Component {

  handleChange = e => {
    const { emailAndPasswordChange } = this.props;
    const { name, value } = e.target;
    emailAndPasswordChange(name, value);
  }

  handleSubmit = e => {
    const { emailAndPassword, emailAndPasswordLogin, history } = this.props;
    const { login_email, login_password} = emailAndPassword;
    e.preventDefault();
    emailAndPasswordLogin(login_email, login_password, history);
  }

  render() {
    const { loginError } = this.props;
    return (
      <div>
				<FontAwesomeIcon id="close-login-modal" onClick={this.props.closeLoginModal} icon='window-close' style={{height: 25, width: 25}}/>

        <p className='modal-title' id='login'>Login</p>

        <form onSubmit={this.handleSubmit}>

          <label htmlFor="login_email">Email
          <br/>
            <input type="text" name="login_email" id="login_email" onChange={this.handleChange}/>
          </label>
          <br/>

          <label htmlFor="login_password">Password
          <br/>
            <input type="password" id="login_password" name="login_password" onChange={this.handleChange} />
          </label>
          <br/>
          <button>Login</button>

        </form>
        <ErrorComponent error={loginError} />
        <Link to={routes.SIGN_UP}>Don't have an account? Signup</Link> <br />
        <Link to={routes.FORGOT_PASS}>Forgot password?</Link>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    emailAndPassword: state.emailAndPasswordToState,
    loginError: state.handleErrorForLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    emailAndPasswordChange: (name, value) => dispatch(dataToLoginWith(name, value)),
    emailAndPasswordLogin: (email, password, history) => dispatch(loginWithEmailAndPassword(email, password, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);