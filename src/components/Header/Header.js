import React, { Component } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';

class Header extends Component {

	render() {
		const { auth } = this.props;
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
						<Link to={{
							pathname: routes.SIGN_IN,
							state: { modal: true }
						}}>
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
				
				{/* End of className="header" */}
			</div> 
		);
	}
}

Header.propTypes = {
	auth: PropTypes.bool
}

export default Header;
