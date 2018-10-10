import React, { Component } from 'react';

class contact extends React.Component {
	constructor() {
		super();
		
  }

	render() {
		return (
			<div className='contact'>

				<button id="close-contact-modal" onClick={this.props.closeContactModal}>X</button>

				<p id='help-question'>What can we help you with?</p>

				<form onSubmit={(e)=>this.handleSubmit(e)}>
		
					<label>Your Name
					<br/>
					<input name="customerName" type="text" value={this.props.customerName} onChange={this.handleChangeName} />
					</label>
					<br/>

					<label>Your Number
					<br/>
					<input name="customerNumber" type="text" value={this.props.customerNumber} onChange={this.handleChangeNumber} />
					</label>
					<br/>

					<label>Your Email
					<br/>
					<input name="customerEmail" type="text" value={this.props.customerEmail} onChange={this.handleChangeEmail} />
					</label>
					<br/>

					<label>Your Comment or Question
					<br/>
					<textarea name="contactContent" type="text" value={this.props.contactContent} onChange={this.handleChangeContent} />
					</label>
					<br/>

					<button className="submitButton" type="submit" onClick={(e)=>this.props.handleSubmit(e)}>Submit</button>
					<button>Reset</button>

				</form>

		  </div>
		);
	}
}

export default contact;