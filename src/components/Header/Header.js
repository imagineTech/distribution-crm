import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import LinksNav from '../findoutmore/partials/LinksNav';
import * as routes from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Contact from './../Contact/Contact.js';

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

	openContactModal = () => {
		document.getElementById('myContactModal').style.display = 'block';
	}

	closeContactModal = () => {
		document.getElementById('myContactModal').style.display = 'none';
	}


//============= ContactModal ===============//

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
					<FontAwesomeIcon onClick={this.openContactModal} icon="envelope" style={{height: '20px', width: '20px'}}/>
				</div>

				<Link to={routes.SIGN_IN} id='sign-in' style={{color: 'red'}}>
					<FontAwesomeIcon icon="user" style={{height: '20px', width: '20px'}}/>
				</Link>

			</div>
				 
				<div id="myContactModal" style={{display: 'none'}}>
					<div className='contact-modal-content'>

					<Contact
						handleSubmit={this.handleSubmit}
						closeContactModal={this.closeContactModal} 
						customerName={this.state.customerName}
						customerNumber={this.state.customerNumber}
						customerEmail={this.state.customerEmail}
						contactContent={this.state.contactContent}
					/>
					
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