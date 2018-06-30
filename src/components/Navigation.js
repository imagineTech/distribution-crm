import React from 'react';
import { Link } from 'react-router-dom';
import Button from './CSS/Button'
import LinksNav from './findoutmore/partials/LinksNav';
import { SecondButton } from './CSS/Button';



//All routes
import * as routes from '../constants/routes';

//Links for the landing page
const LandingLinks = () =>
  <div>
    <Link to={routes.MEMBER_PORTAL}><Button primary>Member Portal</Button></Link>
    <Link to="/findoutmore"><Button primary>Find Out More</Button></Link>
  </div>

//links for the find out page
const FindoutLinks = () =>
  <LinksNav>
    <Link to={routes.HOME}><SecondButton >Home</SecondButton></Link>
    <Link to={routes.ABOUT}><SecondButton >About</SecondButton></Link>
    <Link to={routes.OUR_POLICY}><SecondButton >Our Policy</SecondButton></Link>
    <Link to={routes.CONTACT}><SecondButton >Contact</SecondButton></Link>
    <Link to={routes.SIGN_UP}><SecondButton >Register</SecondButton></Link>
  </LinksNav>

export { LandingLinks };
export { FindoutLinks };
