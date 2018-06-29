//Setup
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Partials
import FindoutContainer from './partials/FindoutContainer';
import Banner from './partials/Banner';
import { FindoutLinks } from '../Navigation';

//Findout Components
import Landing from '../landing/Landing';
import About from './subcomponents/about/About';

//Routes
import * as routes from '../../routes/routes';


const FindoutLanding = () => {
  return(
    <FindoutContainer >
      <Banner />
    </FindoutContainer>
  );
};

export default FindoutLanding;
