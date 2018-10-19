import React from 'react';
import '../Header/Header.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import LinksNav from '../findoutmore/partials/LinksNav';
import * as routes from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const footer = () => {
	
	return (
		<div>
			<div className="footer">
				{/* <img src="https://dummyimage.com/200x100/000/fff" className="footerLogo"></img> */}
				<br/>
				<div className="navLinksContainer">
					<Link to={routes.HOME} className="navLink">Home</Link>
					{/* <Link to={routes.SIGN_IN} className="navLink">Sign In</Link> */}
					<Link to={routes.ABOUT} className="navLink">About</Link>
			    	<Link to={routes.OUR_POLICY} className="navLink">Policy</Link>
			    	<Link to={routes.CONTACT} className="navLink">Contact</Link>
			    	<Link to={routes.SIGN_UP} className="navLink">Register</Link>
					{/* <div className="navLink">Back to the top</div> */}
				</div>
				<div className="lowerLinksContainer">
					{/* <div className="lowerLink">Privacy Policy</div> */}
					<div className="socialLinksContainer">
						<FontAwesomeIcon icon="stroopwafel" />
						<FontAwesomeIcon icon="stroopwafel" />
						<FontAwesomeIcon icon="stroopwafel" />
						<FontAwesomeIcon icon="stroopwafel" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default footer;