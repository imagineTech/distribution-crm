import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { db } from '../../firebase/config_firebase';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle)

class Contact extends Component {

	state = {
		message:""
	}

	handleChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value});
	}

	handleContactSubmit = e => {
		e.preventDefault();
		let query = {...this.state};

		db.collection("contact_queries").doc().set(query)
		.then(() =>{
			this.setState({message:"Thanks, We will get you back ASAP."})
		})
		.catch((error)=> {
			console.error("Error writing document: ", error);
			this.setState({message:'Oops!! Please try again.'})
		});
	}

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

								<form onSubmit={this.handleContactSubmit}>

									<label>Name
									<br/>
										<input name="customerName" type="text" onChange={this.handleChange} />
									</label>
									<br/>

									<label>Phone Number
									<br/>
										<input name="customerNumber" type="text" onChange={this.handleChange} />
									</label>
									<br/>

									<label>Email
									<br/>
										<input name="customerEmail" type="text" onChange={this.handleChange} />
									</label>
									<br/>

									<label>Comment or Question
									<br/>
										<textarea name="contactContent" type="text" onChange={this.handleChange} />
									</label>
									<br/>

									<div className='contact-buttons'>
										<button className="submitButton">Submit</button>
										<button>Reset</button>
									</div>

								</form>
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