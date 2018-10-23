import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Contact extends React.Component {
	
	state = {}

  handleChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value});
	}

	handleContactSubmit = e => {
		e.preventDefault();
		console.log(this.state)
	}

	render() {
		return (
			<div className='contact'>

				<FontAwesomeIcon id="close-contact-modal" onClick={this.props.closeContactModal} icon='window-close' style={{height: 25, width: 25}}/>

				<p className='modal-title'>What can we help you with?</p>

				<form onSubmit={this.handleContactSubmit}>
		
					<label>Name
					<br/>
						<input name="customerName" type="text"  onChange={this.handleChange} />
					</label>
					<br/>

					<label>Phone Number
					<br/>
						<input name="customerNumber" type="text" onChange={this.handleChange} />
					</label>
					<br/>

					<label>Email
					<br/>
						<input name="customerEmail" type="text" value={this.props.customerEmail} onChange={this.handleChange} />
					</label>
					<br/>

					<label>Comment or Question
					<br/>
						<textarea name="contactContent" type="text" value={this.props.contactContent} onChange={this.handleChange} />
					</label>
					<br/>

					<div className='contact-buttons'>
						<button className="submitButton">Submit</button>
						<button>Reset</button>
					</div>

				</form>

		  </div>
		);
	}
}

Contact.propTypes = {
	handleContactSubmit: PropTypes.func.isRequired,
	closeContactModal: PropTypes.func.isRequired,
	customerName: PropTypes.string.isRequired,
	customerNumber: PropTypes.string.isRequired,
	customerEmail: PropTypes.string.isRequired,
	contactContent: PropTypes.string.isRequired
}

export default Contact;