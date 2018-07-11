//Core imports
import React from 'react';

//partials: these are all components needed for FindoutLanding to work
import BannerCover from './BannerCover';
import { SecondButton } from '../../CSS/Button';
import { FindoutLinks } from '../../Navigation';


//Header banner for findout more landing page
const Banner = props => {
  return(
    <BannerCover>
        <FindoutLinks />
        {props.children}
    </BannerCover>
  )
}

export default Banner;
