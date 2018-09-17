import React from 'react';
import '../Header/Header.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import LinksNav from '../findoutmore/partials/LinksNav';
import * as routes from '../../constants/routes';

const footer = () => {
	
	return (
		<div>
			<div className="footer">
				<img src="https://dummyimage.com/200x100/000/fff" className="footerLogo"></img>
				<br/>
				<div className="navLinksContainer">
					<Link to={routes.HOME} className="navLink">Home</Link>
					<Link to={routes.SIGN_IN} className="navLink">Sign In</Link>
					<Link to={routes.ABOUT} className="navLink">About</Link>
			    <Link to={routes.OUR_POLICY} className="navLink">Our Policy</Link>
			    <Link to={routes.CONTACT} className="navLink">Contact</Link>
			    <Link to={routes.SIGN_UP} className="navLink">Register</Link>
					<div className="navLink">Back to the top</div>
				</div>
				<div className="lowerLinksContainer">
					<div className="lowerLink">Privacy Policy</div>
					<div className="socialLinksContainer">
						<img src="" className="socialLink"/>
						<img src="" className="socialLink"/>
						<img src="" className="socialLink"/>
						<img src="" className="socialLink"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default footer;