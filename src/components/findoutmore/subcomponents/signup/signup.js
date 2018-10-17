/*
  The SignUp component, state management is holding
  the email, password and rest of form fields.
  This is done because of firebase and firestore
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { emailAndPasswordSuccess, restOfFormSuccess, emailPasswordFormAuth } from '../../../../actions/signUpData';
import * as routes from '../../../../constants/routes';

class SignUp extends Component {

  //Making Email and Password it's own group due to Authentication with fb
  handleEmailAndPasswordChange = e => {
    const { setEmailAndPassword } = this.props;
    const { name, value } = e.target;
    setEmailAndPassword(name, value);
  };

  handleChange = e => {
    const { setFormData } = this.props;
    const { name, value } = e.target;
    setFormData(name, value);
  }

  handleSubmit = e => {
    const { emailAndPassword, signUpData, history, authEmailPasswordForm } = this.props;
    e.preventDefault();
    authEmailPasswordForm(emailAndPassword, signUpData, history);
  };

  render() {
    return (
          <div>
            <h1>Sign-up</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="first_name">First Name: </label>
              <input type="text" id="first_name" name="First_Name" onChange={this.handleChange}/>
              <label htmlFor="name">Last Name: </label>
              <input type="text" id="last_name" name="Last_Name" onChange={this.handleChange}/>
              <label htmlFor="email">Email: </label>
              <input type="email" id="signup_email" name="Email" onChange={this.handleEmailAndPasswordChange}/>
              <label htmlFor="signup_password">Password: </label>
              <input type="password" id="signup_password" name="Password" onChange={this.handleEmailAndPasswordChange}/>
              <label htmlFor="company">Company: </label>
              <input type="text" id="company" name="Company" onChange={this.handleChange}/>
              <label>Department: </label>
              <input type="text" id="department" name="Department" onChange={this.handleChange}/>
              <label>Country: </label>
              <input type="text" id="country" name="Country" onChange={this.handleChange} />
              <button>Signup</button>
            </form>
            <Link to={routes.SIGN_IN}>Already have an account? Login </Link>
          </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    emailAndPassword: state.emailAndPasswordData,
    signUpData: state.signUpFormData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setEmailAndPassword: (name, value) => dispatch(emailAndPasswordSuccess(name, value)),
    setFormData: (name, value) => dispatch(restOfFormSuccess(name, value)),
    authEmailPasswordForm: (EPData, formData, history) => dispatch(emailPasswordFormAuth(EPData, formData, history))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
