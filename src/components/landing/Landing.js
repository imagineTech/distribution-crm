import React from 'react';

//CSS
import './landing.css';

//Partials
import LandingWrapper from './partials/LandingWrapper';
import TempHeader from './partials/TempHeader';
import TopBanner from './partials/TopBanner';
import BottomContent from './partials/BottomContent';
import BottomComponentsWrapper from './partials/bottomComponents/BottomComponentsWrapper';
import TempFooter from './partials/TempFooter';
import { BecomingAMemberLink } from '../Navigation';
import { HowItWorksLink } from '../Navigation';
import { SoldProducts } from '../Navigation';

const Landing = () => {
  return(
    <LandingWrapper>
      <TempHeader />
      <TopBanner /><br /><hr className="line" />
      <BottomComponentsWrapper>
        <BottomContent bottomLinks={<SoldProducts />} images="https://d1af89beukha9h.cloudfront.net/wp-content/uploads/2018/07/Global-Halal-Cosmetics-and-Personal-Care-Market-256x256.jpg" />
        <BottomContent bottomLinks={<HowItWorksLink />} images="https://pbs.twimg.com/profile_images/729256218796101632/7lyz7I_x_400x400.jpg" />
        <BottomContent bottomLinks={<BecomingAMemberLink />} images="/public/sample-pics/lipsticks.jpg" />
      </BottomComponentsWrapper>
      <TempFooter />
    </LandingWrapper>
  );
};

export default Landing;
