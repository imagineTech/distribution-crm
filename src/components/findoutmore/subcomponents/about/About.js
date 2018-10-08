import React from 'react';


//Partials
import Banner from '../../partials/Banner';
import OurCompany from './partials/ourCompany/OurCompany';
import OurTeam from './partials/ourTeam/OurTeam';




//This is the about main component. Contains every component related to about.
const About = () => {
  return(
    <Banner>
      {/* <h1>This is the about section</h1> */}
      <OurCompany />
      <OurTeam />
    </Banner>
  )
}

export default About;
