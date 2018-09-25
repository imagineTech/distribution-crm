import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import LinksNav from '../findoutmore/partials/LinksNav';
import * as routes from '../../constants/routes';

const header = () => {

	return (
		<div>
			<div>
				<div className="header">
					<img src="https://dummyimage.com/200x100/000/fff" className="headerLogo"></img>
					<br/>
					<div className="navLinksContainer">
						<Link to={routes.HOME} className="navLink">Home</Link>
						<Link to={routes.SIGN_IN} className="navLink">Sign In</Link>
						<Link to={routes.ABOUT} className="navLink">About</Link>
				    <Link to={routes.OUR_POLICY} className="navLink">Our Policy</Link>
				    <Link to={routes.CONTACT} className="navLink">Contact</Link>
				    <Link to={routes.SIGN_UP} className="navLink">Register</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default header;
