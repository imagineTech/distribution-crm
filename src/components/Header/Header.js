import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import LinksNav from '../findoutmore/partials/LinksNav';
import * as routes from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends Component {
	constructor() {
		super();
		this.state = {
		  	customerName: '',
		  	customerNumber: '',
		  	customerEmail: '',
		  	contactContent: ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	openModal = () => {
		document.getElementById('myModal').style.display = 'block';
	}

	closeModal = () => {
		document.getElementById('myModal').style.display = 'none';
	}


//============= Contact Modal ===============//

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

	handleSubmit = e =>  {
	    alert('Thank you for contacting us, ' + this.state.value + "!");
	    e.preventDefault();
	}

	render() {
		return (
		
		<div className="header">
			
			<h1 style={{textAlign: 'center'}}>KUPIDO</h1>
			
			{/* <img src="https://dummyimage.com/200x100/000/fff" className="headerLogo"></img> */}
			
			<div className='contact-sign-in'>

				<div id='contact'>
					<FontAwesomeIcon onClick={this.openModal} icon="envelope" style={{height: '20px', width: '20px'}}/>
				</div>

				<Link to={routes.SIGN_IN} id='sign-in' style={{color: 'red'}}>
					<FontAwesomeIcon icon="user" style={{height: '20px', width: '20px'}}/>
				</Link>

			</div>
				
				<div id="myModal" style={{display: 'none'}}>
					<div className='modal-content'>

					<button id="close-modal" onClick={this.closeModal}>X</button>

						<p id='help-question'>What can we help you with?</p>
						<form onSubmit={(e)=>this.handleSubmit(e)}>
							
							<label>Your Name
							<br/>
							<input name="customerName" type="text" value={this.state.customerName} onChange={this.handleChangeName} />
							</label>
							<br/>

							<label>Your Number
							<br/>
							<input name="customerNumber" type="text" value={this.state.customerNumber} onChange={this.handleChangeNumber} />
							</label>
							<br/>

							<label>Your Email
							<br/>
							<input name="customerEmail" type="text" value={this.state.customerEmail} onChange={this.handleChangeEmail} />
							</label>
							<br/>

							<label>Your Comment or Question
							<br/>
							<textarea name="contactContent" type="text" value={this.state.contactContent} onChange={this.handleChangeContent} />
							</label>
							<br/>

							<button className="submitButton" type="submit" onClick={(e)=>this.handleSubmit(e)}>Submit</button>
							<button>Reset</button>

						</form>

					
				</div>	

			</div>

			{/* <br/> */}
			<div className="navLinksContainer">
				<Link to={routes.HOME} className="navLink">Home</Link>
				<Link to={routes.ABOUT} className="navLink">About</Link>
				<Link to={routes.OUR_POLICY} className="navLink">Our Policy</Link>
				{/* <Link to={routes.CONTACT} className="navLink">Contact</Link> */}
				<Link to={routes.SIGN_UP} className="navLink">Register</Link>	
			</div>

		</div>
	);
}
};

export default Header;