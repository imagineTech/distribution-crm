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
import './signup.css';
import PropTypes from 'prop-types';

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
          <div className='register'>
            <p>Sign up for Kupido to see our prices and shop our products. It's easy to register!</p>

            <form onSubmit={this.handleSubmit}>
              
                <label htmlFor="first_name"><input placeholder="First name" type="text" id="first_name" name="First_Name" onChange={this.handleChange}/>
                </label>

                <label htmlFor="name"><input placeholder="Last name" type="text" id="last_name" name="Last_Name" onChange={this.handleChange}/>
                </label>
              
              <label htmlFor="email"><input placeholder="Email" type="email" id="signup_email" name="Email" onChange={this.handleEmailAndPasswordChange}/>
              </label>

              <label htmlFor="signup_password">
              <input placeholder="Password" type="password" id="signup_password" name="Password" onChange={this.handleEmailAndPasswordChange}/>
              </label>

              <label htmlFor="company">
              <input placeholder="Company" type="text" id="company" name="Company" onChange={this.handleChange}/>
              </label>

              <label>
              <input placeholder="Department" type="text" id="department" name="Department" onChange={this.handleChange}/>
              </label>

              <label>
              <input placeholder="Country" type="text" id="country" name="Country" onChange={this.handleChange} />
              </label>

              <button>Sign up</button>
            </form>
            <Link style={{color: '#C02932'}} to={routes.SIGN_IN}>Already have an account? Log in! </Link>
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

SignUp.propTypes = {
  setFormData: PropTypes.func.isRequired,
  setEmailAndPassword: PropTypes.func.isRequired,
  emailAndPassword: PropTypes.object.isRequired,
  signUpData: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  authEmailPasswordForm: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
