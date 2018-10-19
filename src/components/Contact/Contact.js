import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class contact extends React.Component {
	constructor() {
		super();
		
  }

  handleChange = e => {
	this.setState({value: e.target.value});

	const val = e.target.name;
	this.setState({
		val: {
			...this.state.val,
				[e.target.name]: e.target.value
		}
	});
}

handleChangeName(value) {
	this.setState({customerName: value});
  }

  handleChangeNumber(value) {
	this.setState({customerNumber: value});
  }	

  handleChangeEmail(value) {
	this.setState({customerEmail: value});
  }

  handleChangeContent(value) {
	this.setState({contactContent: value});
  }

	render() {
		return (
			<div className='contact'>

				<FontAwesomeIcon id="close-contact-modal" onClick={this.props.closeContactModal} icon='window-close' style={{height: 25, width: 25}}/>

				<p className='modal-title'>What can we help you with?</p>

				<form onSubmit={(e)=>this.handleContactSubmit(e)}>
		
					<label>Name
					<br/>
					<input name="customerName" type="text" value={this.props.customerName} onChange={this.handleChangeName} />
					</label>
					<br/>

					<label>Phone Number
					<br/>
					<input name="customerNumber" type="text" value={this.props.customerNumber} onChange={this.handleChangeNumber} />
					</label>
					<br/>

					<label>Email
					<br/>
					<input name="customerEmail" type="text" value={this.props.customerEmail} onChange={this.handleChangeEmail} />
					</label>
					<br/>

					<label>Comment or Question
					<br/>
					<textarea name="contactContent" type="text" value={this.props.contactContent} onChange={this.handleChangeContent} />
					</label>
					<br/>

					<div className='contact-buttons'>
						<button className="submitButton" type="submit" onClick={(e)=>this.props.handleContactSubmit(e)}>Submit</button>
						<button>Reset</button>					
					</div>

				</form>

		  </div>
		);
	}
}

export default contact;