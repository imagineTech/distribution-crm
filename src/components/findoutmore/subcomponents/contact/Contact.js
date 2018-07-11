import React from 'react';

//partials
import Banner from '../../../findoutmore/partials/Banner';
import ContactContainer from './partials/ContactContainer';
import Portrait from './partials/Portrait';
import Forms from './partials/Forms';


//Main contact component. Contains all components related to contact.
const Contact = ()=>{
  return(
    <Banner>
      <ContactContainer>
        <Portrait />
        {/* <Forms /> */}
      </ContactContainer>
    </Banner>
  )
}

export default Contact;
