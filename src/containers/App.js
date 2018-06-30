import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css'

//Custom components
import { Route } from 'react-router-dom';
import Landing from '../components/landing/Landing';
import FindoutLanding from '../components/findoutmore/FindoutLanding';
import About from '../components/findoutmore/subcomponents/about/About';
import OurPolicy from '../components/findoutmore/subcomponents/ourpolicy/OurPolicy';
import Contact from '../components/findoutmore/subcomponents/contact/Contact';
import * as routes from '../constants/routes';


class App extends Component {
  render() {
    return (
        <div id="main-container">
            <Route exact path={routes.HOME} component={() => <Landing />}  />
            <Route exact path={routes.FIND_OUT_MORE} component={() => <FindoutLanding />} />
            <Route exact path={routes.ABOUT} component={() => <About />}  />
            <Route exact path={routes.OUR_POLICY} component={() => <OurPolicy />} />
            <Route exact path={routes.CONTACT} component={() => <Contact />} />
        </div>
    );
  }
}

export default App;
