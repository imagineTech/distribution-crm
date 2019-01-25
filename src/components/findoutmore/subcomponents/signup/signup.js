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
import { Formik } from 'formik';
import * as Yup from 'yup';

class SignUp extends Component {

  //Making Email and Password it's own group due to Authentication with fb
  handleEmailAndPasswordChange = (e, fn) => {
    const { setEmailAndPassword } = this.props;
    const { name, value } = e.target;
    setEmailAndPassword(name, value);
    fn(e);
  };

  handleChange = (e, fn) => {
    const { setFormData } = this.props;
    const { name, value } = e.target;
    setFormData(name, value);
    fn(e);
  }

  // handleSubmit = e => {
  //   const { emailAndPassword, signUpData, history, authEmailPasswordForm } = this.props;
  //   e.preventDefault();
  //   authEmailPasswordForm(emailAndPassword, signUpData, history);
  // };

  render() {
    return (
      <div className='register'>
            <h1 style={{}}>REGISTER</h1>
            <p>Global Trade Deal's number one priority is its commitment to its clients. In order to provide the best possible service, it only accepts a handful of applicants to work with us. If you are interested in partnering with us and becoming a client, please send us a registration request under the "Register" section. Please make sure you fit the criteria which is the following: Your minimum first-time purchase order must be at least $1,000. Also, you must own, or be the official representatives of an existing, registered business with an annual revenue of at least $80,000 per year.</p>
  
            <Formik
            initialValues={{Email:"",First_Name:"",Last_Name:"",Password:"",Company:"",Department:"",Country:""}}
            onSubmit={(values, { setSubmitting }) => {
              const { emailAndPassword, signUpData, history, authEmailPasswordForm } = this.props;
              authEmailPasswordForm(emailAndPassword, signUpData, history);
            }}
            validationSchema={Yup.object().shape({
              Email: Yup.string()
                .email()
                .required("Email is Required"),
              First_Name: Yup.string()
                .required("First name is Required"),
              Last_Name: Yup.string()
                .required("Last name is Required"),
                Password:Yup.string()
                .required("Password is Required"),
                Company:Yup.string()
                .required("Company name is Required"),
                Department:Yup.string()
                .required("Department name is Required"),
                Country:Yup.string()
                .required("Country name is Required")
            })}
            >
            
            {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            } = props;
            
            return (<form onSubmit={handleSubmit}>
              
                <label htmlFor="first_name">
                <input placeholder="First name" type="text" id="first_name" name="First_Name" onChange={(e)=>this.handleChange(e,handleChange)} onBlur={handleBlur} value={values.First_Name}/>
                </label>

                <label htmlFor="name"><input placeholder="Last name" type="text" id="last_name" name="Last_Name" onChange={e=>this.handleChange(e,handleChange)} value={values.Last_Name}/>
                </label>
              
              <label htmlFor="email"><input placeholder="Email" type="email" id="signup_email" name="Email" onChange={e=>this.handleEmailAndPasswordChange(e,handleChange)} value={values.Email}/>
              </label>

              <label htmlFor="signup_password">
              <input placeholder="Password" type="password" id="signup_password" name="Password" onChange={e=>this.handleEmailAndPasswordChange(e,handleChange)} value={values.Password}/>
              </label>

              <label htmlFor="company">
              <input placeholder="Company" type="text" id="company" name="Company" onChange={e=>this.handleChange(e,handleChange)} value={values.Company}/>
              </label>

              <label>
              <input placeholder="Department" type="text" id="department" name="Department" onChange={e=>this.handleChange(e,handleChange)} value={values.Department}/>
              </label>

              <label>
              <input placeholder="Country" type="text" id="country" name="Country" onChange={e=>this.handleChange(e,handleChange)} value={values.Country}/>
              </label>
              {errors.Email && touched.Email && (
                <div className="input-feedback">{errors.Email}</div>)
                } {
                  errors.First_Name && touched.First_Name && (
                    <div className="input-feedback">{errors.First_Name}</div>
                  )
                }
                {errors.Last_Name && touched.Last_Name && (
                <div className="input-feedback">{errors.Last_Name}</div>)
                } {
                  errors.Password && touched.Password && (
                    <div className="input-feedback">{errors.Password}</div>
                  )
                }
                {errors.Company && touched.Company && (
                <div className="input-feedback">{errors.Company}</div>)
                } {
                  errors.Department && touched.Department && (
                    <div className="input-feedback">{errors.Department}</div>
                  )
                }
                {
                  errors.Country && touched.Country && (
                    <div className="input-feedback">{errors.Country}</div>
                  )
                }
              <button type="submit">SIGN UP</button>
            </form>);
            }}
            </Formik>
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
