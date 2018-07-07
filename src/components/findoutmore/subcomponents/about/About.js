import React from 'react';

//Partials
import Banner from '../../../findoutmore/partials/Banner';
import AboutContainer from './partials/AboutContainer';
import Portrait from './partials/Portrait';
import Content from './partials/Content';
import KupidoLogo from '../../../landing/partials/KupidoLogo';


//This is the about main component. Contains every component related to about.
const About = () => {
  return(
    <Banner>
      <AboutContainer>
        <Portrait />

        <Content>
          <KupidoLogo>Kupido Wholesale LLC</KupidoLogo>

            <h3>Our Values:</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  <br /><br />
            <h3>Our Unique Market Advantage:</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  <br /><br />

        </Content>
      </AboutContainer>
    </Banner>
  )
}

export default About;
