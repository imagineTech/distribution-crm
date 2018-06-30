//Setup
import React from 'react';

//Partials
import FindoutContainer from './partials/FindoutContainer';
import Banner from './partials/Banner';
import { FindoutLinks } from '../Navigation';

//Findout Components
import Landing from '../landing/Landing';
import About from './subcomponents/about/About';

//Routes
import * as routes from '../../constants/routes';

//Main findout landing component. Contains all components related to the find out more landing page.
const FindoutLanding = () => {
  return(
    <FindoutContainer >
      <Banner />
    </FindoutContainer>
  );
};

export default FindoutLanding;
