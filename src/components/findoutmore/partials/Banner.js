//Core imports
import React from 'react';

//partials: these are all components needed for FindoutLanding to work
import { SecondButton } from '../../CSS/Button';
import { FindoutLinks } from '../../Navigation';
import FindoutContainer from './FindoutContainer';


//Header banner for findout more landing page
const Banner = props => {
  return(
    <FindoutContainer>
      <FindoutLinks />
      {props.children}
    </FindoutContainer>
  )
}

export default Banner;
