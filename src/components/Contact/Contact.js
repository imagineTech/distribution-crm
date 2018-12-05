import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { db } from '../../firebase/config_firebase';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Formik } from 'formik';
import * as Yup from 'yup';

library.add(faCheckCircle)

class Contact extends Component {

	state = {
		message: ""
	}

	handleChange = (e, fn) => {
		const { name, value } = e.target
		this.setState({
			[name]: value
		});
		fn(e);
	}

	// handleContactSubmit = e => {
	// 	e.preventDefault();
	// 	let query = { ...this.state };

	// 	db.collection("contact_queries").doc().set(query)
	// 		.then(() => {
	// 			this.setState({ message: "Thanks, We will get you back ASAP." })
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error writing document: ", error);
	// 			this.setState({ message: 'Oops!! Please try again.' })
	// 		});
	// }

	close = e => {
		const { history } = this.props;
		e.stopPropagation();
		history.goBack()
	}

	render() {
		let { location } = this.props;
		let { message } = this.state;
		return (
			<div id={ location.state.modal ? "myContactModal" : undefined }>
				<div className='contact-modal-content'>
					<div className='contact'>
						<FontAwesomeIcon id="close-contact-modal" onClick={this.close} icon='window-close' style={{height: 25, width: 25}}/>
						{
						message===''?
							<div>
								<p className='modal-title'>What can we help you with?</p>
								<Formik
									initialValues={{customerName:"",customerNumber:0,customerEmail:"",contactContent:""}}
									onSubmit={() => {
							        let query = { ...this.state };
										console.log({...this.state});
								db.collection("contact_queries").doc().set(query)
									.then(() => {
										this.setState({ message: "Thanks, We will get you back ASAP." })
									})
									.catch((error) => {
										console.error("Error writing document: ", error);
										this.setState({ message: 'Oops!! Please try again.' })
									});
							      }}
							      validationSchema={Yup.object().shape({
							      customerName:Yup.string()
							          .required(),
							          customerNumber:Yup.string()
							          .required(),
							          customerEmail:Yup.string()
							          .email()
							          .required("email is Required"),
							          contactContent:Yup.string()
							          .required("content in message is required")
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
									return(
								<form onSubmit={handleSubmit}>

									<label>Name
									<br/>
										<input onBlur={handleBlur} value={values.customerName} name="customerName" type="text" onChange={e=>this.handleChange(e,handleChange)} />
									</label>
									<br/>

									<label>Phone Number
									<br/>
										<input onBlur={handleBlur} value={values.customerNumber} name="customerNumber" type="text" onChange={e=>this.handleChange(e,handleChange)} />
									</label>
									<br/>

									<label>Email
									<br/>
										<input onBlur={handleBlur} value={values.customerEmail} name="customerEmail" type="text" onChange={e=>this.handleChange(e,handleChange)} />
									</label>
									<br/>

									<label>Comment or Question
									<br/>
										<textarea onBlur={handleBlur} value={values.contactContent} name="contactContent" type="text" onChange={e=>this.handleChange(e,handleChange)} />
									</label>
									<br/>
									{errors.customerName && touched.customerName && (
						              <div className="input-feedback">{errors.customerName}</div>)
						              } {
						              	errors.customerNumber && touched.customerNumber && (
						              		<div className="input-feedback">{errors.customerNumber}</div>
						              	)
						              } {
						              	errors.customerEmail && touched.customerEmail && (
						              		<div className="input-feedback">{errors.customerEmail}</div>
						              	)
						              } {
						              	errors.contactContent && touched.contactContent && (
						              		<div className="input-feedback">{errors.contactContent}</div>
						              	)
						              }
									<div className='contact-buttons'>
										<button className="submitButton" type="submit">Submit</button>
										<button>Reset</button>
									</div>

								</form>);
								}}
								</Formik>
							</div>:
							<div>
								<p>{message}</p>
								<div style={{textAlign:'center',paddingTop:'3em'}}>
									<FontAwesomeIcon icon="check-circle" size="7x"/>
								</div>
							</div>
						}
					</div>
				</div>
			</div>
		);
	}
}

Contact.propTypes = {
	customerName: PropTypes.string.isRequired,
	customerNumber: PropTypes.string.isRequired,
	customerEmail: PropTypes.string.isRequired,
	contactContent: PropTypes.string.isRequired
}

export default Contact;
