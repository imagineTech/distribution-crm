import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css'

//Custom components
// import { FindOutMore } from './components/findOutMore/FindOutMore';
import Hamburger from './components/partials/hamburger/Hamburger';
// import FindoutLink from './components/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {FindoutHeader} from './components/findOutMore/FindoutHeader';
import Landing from './components/landing/Landing';
import FindoutLanding from './components/findoutmore/FindoutLanding';
import { LandingLinks } from './components/Navigation';
import About from './components/findoutmore/subcomponents/about/About';
import OurPolicy from './components/findoutmore/subcomponents/ourpolicy/OurPolicy';
import Contact from './components/findoutmore/subcomponents/contact/Contact';




import * as routes from './routes/routes';


class App extends Component {
  render() {
    return (
      <Router>
        <div id="main-container">
          {/* <Switch> */}
            {/* <Route path="/" component={Landing} exact /> */}
            <Route path={routes.HOME} component={Landing} exact />
            <Route path={routes.FIND_OUT_MORE} component={FindoutLanding} />
            <Route path={routes.ABOUT} component={About}  />
            <Route path={routes.OUR_POLICY} component={OurPolicy} />
            <Route path={routes.CONTACT} component={Contact} />

            {/* <Route path={routes.HOME} component={About} exact /> */}
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
