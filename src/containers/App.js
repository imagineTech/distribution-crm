import React, { Component } from 'react';
import styled from 'styled-components';
// import '../App.css'

//Custom components
import Hamburger from '../components/partials/hamburger/Hamburger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../components/landing/Landing';
import FindoutLanding from '../components/findoutmore/FindoutLanding';
import { LandingLinks } from '../components/Navigation';
import About from '../components/findoutmore/subcomponents/about/About';
import OurPolicy from '../components/findoutmore/subcomponents/ourpolicy/OurPolicy';
import Contact from '../components/findoutmore/subcomponents/contact/Contact';

//All routes
import * as routes from '../constants/routes';

//Main app section.
class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-container">
          {/* <Switch> */}
            <Route path={routes.HOME} component={Landing} exact />
            <Route path={routes.FIND_OUT_MORE} component={FindoutLanding} />
            <Route path={routes.ABOUT} component={About}  />
            <Route path={routes.OUR_POLICY} component={OurPolicy} />
            <Route path={routes.CONTACT} component={Contact} />
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
