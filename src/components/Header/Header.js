import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import LinksNav from '../findoutmore/partials/LinksNav';
import * as routes from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Contact from './../Contact/Contact.js';
import Login from './../findoutmore/subcomponents/login/login.js';
import PropTypes from 'prop-types';

class Header extends Component {
	constructor() {
		super();
		this.state = {
		  	customerName: '',
		  	customerNumber: '',
		  	customerEmail: '',
		  	contactContent: ''
		};
	}

	openContactModal = () => {
		document.getElementById('myContactModal').style.display = 'block';
	}
	closeContactModal = () => {
		document.getElementById('myContactModal').style.display = 'none';
	}

	openLoginModal = () => {
		document.getElementById('myLoginModal').style.display = 'block';

	}
	closeLoginModal = () => {
		document.getElementById('myLoginModal').style.display = 'none';
	}

	handleContactSubmit = e =>  {
	    alert('Thank you for contacting us, ' + this.state.value + "!");
	    e.preventDefault();
	}

	render() {
		const { auth } = this.props;
		return (
		
		<div className="header">

		
			
			<div className='contact-sign-in'>
				<div id='contact'>
						<FontAwesomeIcon onClick={this.openContactModal} icon="envelope" style={{height: '20px', width: '20px', marginRight: '5px'}}/>
				</div>
				<Link to={routes.SIGN_IN}>
					<div id='sign-in'>
							<FontAwesomeIcon onClick={this.openLoginModal} icon="user" style={{ height: '20px', width: '20px', marginLeft: '5px' }} />

					</div>
				</Link>
			</div>

			<Link to={routes.HOME} className="navLink">
				<h1 style={{textAlign: 'center', margin: 0}}>KUPIDO</h1>
			</Link>

			{/* <img src="https://dummyimage.com/200x100/000/fff" className="logo"></img> */}

			<div className="navLinksContainer">
				<Link to={routes.HOME} className="navLink">HOME</Link>
				<Link to={routes.ABOUT} className="navLink">ABOUT</Link>
 
				<Link to={routes.SIGN_UP} className="navLink">REGISTER</Link>	
				{/* <Link to={routes.SIGN_IN} className="navLink">LOGIN</Link> */}

				{auth && <Link to={routes.MEMBER_PORTAL} className="navLink">PORTAL</Link>}

			</div>

{/* ========== Contact Modal ========== */}
				
				<div id="myContactModal" style={{display: 'none'}}>
					<div className='contact-modal-content'>
						<Contact
							handleContactSubmit={this.handleContactSubmit}
							closeContactModal={this.closeContactModal} 
							customerName={this.state.customerName}
							customerNumber={this.state.customerNumber}
							customerEmail={this.state.customerEmail}
							contactContent={this.state.contactContent}
						/>
					</div>	
				</div>

{/* ========== Login Modal ========== */}

				<div id="myLoginModal" style={{display: 'none'}}>
					<div className='login-modal-content'>
						<Route 
							exact
							path={routes.SIGN_IN} 
							render={rest => {
								return <Login 
									{...rest} 
									// handleContactSubmit={this.handleContactSubmit}
									closeLoginModal={this.closeLoginModal} />
							}} />	
					</div>	
				</div>
				

		</div>
	);
}
};

Header.propTypes = {
	auth: PropTypes.bool
}

export default Header;