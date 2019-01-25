import React from 'react';
import '../Header/Header.css';
import './Footer.css';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';


const footer = () => {
    return (
        <div className="footer">

            <div className="nav-links-container">
                <Link to={routes.HOME} className="navLink bottom-nav">HOME</Link>
                <Link to={routes.ABOUT} className="navLink bottom-nav">ABOUT</Link>
                <Link to={routes.OUR_POLICY} className="navLink bottom-nav">POLICY</Link>
                <Link to={routes.CONTACT} className="navLink bottom-nav">CONTACT</Link>
                <Link to={routes.SIGN_UP} className="navLink bottom-nav">REGISTER</Link>
            </div>

            <div className="socialLinksContainer">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kupidowholesalers/"><i className="fab fa-facebook" /></a>
				<a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/"><i className="fab fa-youtube-square" /></a>
				<a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/"><i className="fab fa-linkedin" /></a>
            </div>
        </div>
    );
};


export default footer;
