import React, { Component } from 'react';
import './Header.css';
import { Link, Route, NavLink, withRouter } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Login from './../findoutmore/subcomponents/login/login.js';
import PropTypes from 'prop-types';

class Header extends Component {

	openLoginModal = () => {
		document.getElementById('myLoginModal').style.display = 'block';
	}
	closeLoginModal = () => {
		document.getElementById('myLoginModal').style.display = 'none';
	}

	render() {
		const { auth, location } = this.props;
		return (

			<div className="header">

				<div className='contact-sign-in'>

					<div className="navLinksContainer">
						<NavLink exact={true} to={routes.HOME} activeStyle={{color: 'black', borderBottom: '#C02932 2px solid'}} className="navLink">HOME</NavLink>
						<NavLink to={routes.ABOUT} activeStyle={{color: 'black', borderBottom: '#C02932 2px solid'}} className="navLink">ABOUT</NavLink>
						<NavLink to={routes.SIGN_UP} activeStyle={{color: 'black', borderBottom: '#C02932 2px solid'}} className="navLink">REGISTER</NavLink>	
						{auth && <NavLink to={routes.MEMBER_PORTAL} activeStyle={{ color: 'black', borderBottom: '#C02932 2px solid' }} className="navLink">PORTAL</NavLink>}

					</div>
					<Link to={{
						pathname: routes.CONTACT,
						state: { modal: true }
					}}>
						<div id='contact'>
							<FontAwesomeIcon icon="envelope" style={{height: '20px', width: '20px', marginLeft: '20px'}}/>
						</div>
					</Link>
					{auth ? null : 
						<Link to={routes.SIGN_IN}>
							<div id='sign-in'>
								<FontAwesomeIcon onClick={this.openLoginModal} icon="user" style={{color: 'rgba(0, 0, 0, .7)', height: '20px', width: '20px', marginLeft: '20px' }} />
							</div>
						</Link>
					}
					{/* End of className='contact-sign-in' */}
				</div>
				

				<Link to={routes.HOME} className="navLink">
					<h1 style={{textAlign: 'center', margin: 0}}>KUPIDO</h1>
				</Link>

				{/* <img src="https://dummyimage.com/200x100/000/fff" className="logo"></img> */}

				{/* ========== Contact Modal ========== */}
				
				{/* ========== Login Modal ========== */}
				<Route 
					exact 
					path={routes.SIGN_IN} 
					render={rest => {
						return <Login 
						{...rest} 
						closeLoginModal={this.closeLoginModal} />
					}} 
				/>	
				{/* End of className="header" */}
				{console.log(location)}
			</div> 
		);
	}
}

Header.propTypes = {
	auth: PropTypes.bool
}

export default withRouter(Header);
