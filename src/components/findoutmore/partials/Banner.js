import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//partials
import BannerCover from './BannerCover';
import { SecondButton } from '../../CSS/Button';
import { FindoutLinks } from '../../Navigation';



const Banner = () => {
  return(
    <BannerCover>
        <FindoutLinks />
    </BannerCover>
  )
}

export default Banner;
