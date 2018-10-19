/*
  The SignUp component, state management is holding
  the email, password and rest of form fields.
  This is done because of firebase and firestore
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailAndPasswordSuccess, restOfFormSuccess, emailPasswordFormAuth } from '../../../../actions/signUpData';

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
          <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="first_name">First Name<br/>
              <input type="text" id="first_name" name="First_Name" onChange={this.handleChange}/>
              </label><br/>

              <label htmlFor="name">Last Name<br/>
              <input type="text" id="last_name" name="Last_Name" onChange={this.handleChange}/>
              </label><br/>

              <label htmlFor="email">Email<br/>
              <input type="email" id="signup_email" name="Email" onChange={this.handleEmailAndPasswordChange}/>
              </label><br/>

              <label htmlFor="signup_password">Password<br/>
              <input type="password" id="signup_password" name="Password" onChange={this.handleEmailAndPasswordChange}/>
              </label><br/>

              <label htmlFor="company">Company<br/>
              <input type="text" id="company" name="Company" onChange={this.handleChange}/>
              </label><br/>

              <label>Department<br/>
              <input type="text" id="department" name="Department" onChange={this.handleChange}/>
              </label><br/>

              <label>Country<br/>
              <input type="text" id="country" name="Country" onChange={this.handleChange} />
              </label><br/>

              <button>Sign up</button>
            </form>
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
    authEmailPasswordForm: (EPData, formData) => dispatch(emailPasswordFormAuth(EPData, formData))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
