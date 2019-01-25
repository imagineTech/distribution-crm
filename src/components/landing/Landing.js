import React from 'react';

//CSS
import './landing.css';

//Partials
import LandingWrapper from './partials/LandingWrapper';
import TopBanner from './partials/TopBanner';
import BottomContent from './partials/BottomContent';
import { SoldProducts } from '../Navigation';
import BecomingAMember from './../landing/partials/bottomComponents/becomingAMember/BecomingAMember';
import HowItWorks from './../landing/partials/bottomComponents/howItWorks/HowItWorks';
import Content from './../landing/partials/bottomComponents/becomingAMember/partials/Content';

const Landing = () => {
  return(
    <div className='landing'>
      <div>
        <h1 className='splash-title'>Global Trade Deals</h1>
        <h2 className='splash-heading'>Large-Scale Wholesale Company</h2>
        <TopBanner/>
      </div>

      <div className='main'>
        <BecomingAMember/>
        <HowItWorks/>
        <Content/>
      </div>
    </div>
  );
};

export default Landing;
