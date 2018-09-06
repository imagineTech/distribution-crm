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
      <h1>This is the Find Out More Section</h1>
    </FindoutContainer>
  );
};

export default FindoutLanding;
