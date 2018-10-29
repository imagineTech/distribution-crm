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

const RegistrationRedirection = () =>
  <div>
    <Link to={routes.SIGN_UP}><LandingButton primary>Apply Now!</LandingButton></Link>
  </div>

const BecomingAMemberInstructionsLink = () =>
  <div><Link to={routes.BECOMING_A_MEMBER}><h2>Find out how to become a memeber!</h2></Link></div>

const BecomingAMemberLink = () =>
    <div className='bottom-image-container'><Link to={routes.BECOMING_A_MEMBER} style={{textDecoration: 'none'}}><LandingButton style={{backgroundImage: "url('https://images.unsplash.com/photo-1536141248755-a88ad9a2dcab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=490c41bd30d514b86d1639f96b7d66f3&auto=format&fit=crop&w=750&q=80')"}}>BECOMING A MEMBER</LandingButton></Link></div>

const HowItWorksLink = () =>
    <div className='bottom-image-container'><Link to={routes.HOW_IT_WORKS} style={{textDecoration: 'none'}}><LandingButton style={{backgroundImage: "url('https://images.unsplash.com/photo-1526045405698-cf8b8acc4aaf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de7f7c5a341e5e6a2056f26dcba73687&auto=format&fit=crop&w=500&q=60')"}}>HOW IT WORKS</LandingButton></Link></div>

const SoldProducts = () =>
    <div className='bottom-image-container'><Link to={routes.SOLD_PRODUCTS} style={{textDecoration: 'none'}}><LandingButton style={{backgroundImage: "url('https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b8871553433235948b9931cf8513295&auto=format&fit=crop&w=695&q=80')"}}>SOLD PRODUCTS</LandingButton></Link></div>

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
export { BecomingAMemberInstructionsLink }
export { RegistrationRedirection }
