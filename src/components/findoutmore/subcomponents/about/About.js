import React from 'react';


//Partials
import Banner from '../../partials/Banner';
import OurBrand from './partials/ourBrand/OurBrand';
import OurTeam from './partials/ourTeam/OurTeam';




//This is the about main component. Contains every component related to about.
const About = () => {
  return(
    <Banner>
      <h1>This is the about section</h1>
      <OurBrand />
      <OurTeam />
    </Banner>
  )
}

export default About;
