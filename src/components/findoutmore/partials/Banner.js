//Core imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//partials: these are all components needed for FindoutLanding to work
import BannerCover from './BannerCover';
import { SecondButton } from '../../CSS/Button';
import { FindoutLinks } from '../../Navigation';


//Header banner for findout more landing page
const Banner = () => {
  return(
    <BannerCover>
        <FindoutLinks />
    </BannerCover>
  )
}

export default Banner;
