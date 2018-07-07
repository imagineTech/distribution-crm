import React from 'react';

//partials
import Banner from '../../../findoutmore/partials/Banner';
import OurPolicyContainer from './partials/OurPolicyContainer';

//Main OurPolicy component. Contains all components related to our policy.
const OurPolicy = () => {
  return(
    <Banner>
      <OurPolicyContainer>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br/><br/> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br/><br/> dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, <br/><br/> sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </OurPolicyContainer>
    </Banner>
  )
}

export default OurPolicy;
