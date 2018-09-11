import React, { Component } from 'react';

class contact extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      customerName: '',
      customerNumber: '',
      customerEmail: '',
      contactContent: ''
    };

  }

	handleChange = e => {
			console.log(e.target.name);
	    const val = e.target.name;
	    this.setState({
	    	val: {
	    		...this.state.val,
					[e.target.name]: e.target.value
				}
			});
	    console.log(this.state.customerName);
	  }

	handleSubmit = e =>  {
	    alert('Thanks for your feedback' + this.state.value);
	    e.preventDefault();
	  }

	render() {

		return (
			<div>
		    <form onSubmit={(e)=>this.handleSubmit(e)}>
		    	<label>
		    		Your Name:
		      	<input name="customerName" type="text" defautValue={this.state.customerName} onChange={this.handleChange} />
		      </label>
		      <br />
		      <label>
		        Your Number:
		        <input name="customerNumber" type="text" value={this.state.customerNumber} onChange={this.handleChange} />
		      </label>
		      <br />
		      <label>
		        Your Email:
		        <input name="customerEmail" type="text" value={this.state.customerEmail} onChange={this.handleChange} />
		      </label>
		      <label>
		        Your Comment or Question:
		        <textarea name="contactContent" type="text" value={this.state.contactContent} onChange={this.handleChange} />
		      </label>
		      <br />
		      <button className="submitButton" type="submit" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
		    </form>
		  </div>
		);
	}
}

export default contact;