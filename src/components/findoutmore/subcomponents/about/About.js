import React from 'react';

//Partials
import AboutContainer from './partials/AboutContainer';
import Portrait from './partials/Portrait';
import Content from './partials/Content';
import KupidoLogo from '../../../landing/partials/KupidoLogo';


const About = () => {
  return(
    <AboutContainer>
      <Portrait />

      <Content>
        <KupidoLogo>Kupido Wholesale LLC</KupidoLogo>

          <h3>Our Values:</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  <br /><br />
          <h3>Our Unique Market Advantage:</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  <br /><br />

      </Content>
    </AboutContainer>
  )
}

export default About;
