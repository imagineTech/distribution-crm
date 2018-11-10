import React from 'react';
import '../Header/Header.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';


const footer = () => {
    return (
        <div className="footer">

            <div className="nav-links-container">
                <Link to={routes.HOME} className="navLink bottom-nav">Home</Link>
                <Link to={routes.ABOUT} className="navLink bottom-nav">About</Link>
                <Link to={routes.OUR_POLICY} className="navLink bottom-nav">Policy</Link>
                <Link to={routes.CONTACT} className="navLink bottom-nav">Contact</Link>
                <Link to={routes.SIGN_UP} className="navLink bottom-nav">Register</Link>
            </div>

            <div className="socialLinksContainer">
              <a target="_blank" href="https://www.facebook.com/kupidowholesalers/"><i className="fab fa-facebook" /></a>
							<a target="_blank" href="#"><i className="fab fa-youtube-square" /></a>
							<a target="_blank" href="#"><i className="fab fa-linkedin" /></a>
            </div>
        </div>
    );
};


export default footer;
