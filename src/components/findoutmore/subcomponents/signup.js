/*
  The SignUp component, state management is holding
  the email, password and rest of form fields.
  This is done because of firebase and firestore
*/

import React, { Component } from 'react';
import Banner from '../../findoutmore/partials/Banner';
import { connect } from 'react-redux';
import { emailAndPasswordSuccess, restOfFormSuccess, emailPasswordFormAuth } from '../../../actions/signUpData';

class SignUp extends Component {

  //Making Email and Password it's own group due to Authentication with fb
  handleEmailAndPasswordChange = e => {
    this.props.setEmailAndPassword(e.target.name, e.target.value);
  };

  handleChange = e => {
    this.props.setFormData(e.target.name, e.target.value);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.authEmailPasswordForm(this.props.emailAndPassword, this.props.signUpData);
  };

  render() {
    return (
      <Banner>
        <div>
          <h1>Sign-up</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="Name" onChange={this.handleChange}/>
            <label htmlFor="email">Email: </label>
            <input type="email" id="signup_email" name="Email" onChange={this.handleEmailAndPasswordChange}/>
            <label htmlFor="signup_password">Password: </label>
            <input type="password" id="signup_password" name="Password" onChange={this.handleEmailAndPasswordChange}/>
            <label htmlFor="company">Company: </label>
            <input type="text" id="company" name="Company" onChange={this.handleChange}/>
            <label>Department: </label>
            <input type="text" id="department" name="Department" onChange={this.handleChange}/>
            <button>Signup</button>
          </form>
        </div>
      </Banner>
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
    authEmailPasswordForm: (EPData, formData) => dispatch(emailPasswordFormAuth(EPData, formData))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
