import React from 'react';
import { Link } from 'react-router-dom';
import Button from './CSS/Button'
import LinksNav from './findoutmore/partials/LinksNav';
import { SecondButton } from './CSS/Button';
import LandingButton from './landing/partials/bottomComponents/LandingButton';

//All routes
import * as routes from '../constants/routes';

//Links for the landing page
const LandingLinks = () =>
  <div>
    <Link to={routes.SIGN_IN}><Button primary>Member Portal</Button></Link>
    <Link to={routes.FIND_OUT_MORE}><Button primary>Find Out More</Button></Link>
  </div>

const BecomingAMemberLink = () =>
    <div><Link to={routes.BECOMING_A_MEMBER}><LandingButton>BECOME A MEMBER</LandingButton></Link></div>

const HowItWorksLink = () =>
    <div><Link to={routes.HOW_IT_WORKS}><LandingButton>HOW IT WORKS</LandingButton></Link></div>

const SoldProducts = () =>
    <div><Link to={routes.SOLD_PRODUCTS}><LandingButton>SOLD PRODUCTS</LandingButton></Link></div>

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
export { BecomingAMemberLink };
export { HowItWorksLink };
export { SoldProducts };
