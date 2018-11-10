import React from 'react';
import '../Header/Header.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BottomIcons } from '../Navigation';

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

            <div className="socialLinksContainer">
              <a target="_blank" href="https://www.facebook.com/kupidowholesalers/"><i className="fab fa-facebook" /></a>
							<a target="_blank" href="#"><i className="fab fa-youtube-square" /></a>
							<a target="_blank" href="#"><i className="fab fa-linkedin" /></a>
            </div>
        </div>
    );

	return (
		<div className="footer">

			<div className="navLinksContainer">
				<Link to={routes.HOME} className="navLink">Home</Link>
				<Link to={routes.ABOUT} className="navLink">About</Link>
				<Link to={routes.OUR_POLICY} className="navLink">Policy</Link>
				<Link to={routes.CONTACT} className="navLink">Contact</Link>
				<Link to={routes.SIGN_UP} className="navLink">Register</Link>
			</div>



		</div>
	);
};


export default footer;
