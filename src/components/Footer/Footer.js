import React from 'react';
import '../Header/Header.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import LinksNav from '../findoutmore/partials/LinksNav';
import * as routes from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const footer = () => {
	
	return (
		<div className="footer">

			<div className="navLinksContainer">
				<Link to={routes.HOME} className="navLink">Home</Link>
				<Link to={routes.ABOUT} className="navLink">About</Link>
				<Link to={routes.OUR_POLICY} className="navLink">Policy</Link>
				<Link to={routes.CONTACT} className="navLink">Contact</Link>
				<Link to={routes.SIGN_UP} className="navLink">Register</Link>
			</div>

			<div className="lowerLinksContainer">
				<div className="socialLinksContainer">
					<FontAwesomeIcon icon="stroopwafel" />
					<FontAwesomeIcon icon="stroopwafel" />
					<FontAwesomeIcon icon="stroopwafel" />
					<FontAwesomeIcon icon="stroopwafel" />
				</div>
			</div>

		</div>
	);
};

export default footer;