//Setup
import React from 'react';

//Partials
import FindoutContainer from './partials/FindoutContainer';
import Banner from './partials/Banner';

//Main findout landing component. Contains all components related to the find out more landing page.
const FindoutLanding = () => {
  return(
    <FindoutContainer >
      <Banner />
    </FindoutContainer>
  );
};

export default FindoutLanding;
