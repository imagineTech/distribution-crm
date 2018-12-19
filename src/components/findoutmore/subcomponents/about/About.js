import React from 'react';

//Partials
import OurCompany from './partials/ourCompany/OurCompany';
import OurTeam from './partials/ourTeam/OurTeam';

//This is the about main component. Contains every component related to about.
const About = () => {
  return(
    <div>
      <OurCompany />
      <OurTeam />
    </div>
  )
}

export default About;
