import React from 'react';

//partials

import ContactContainer from './partials/ContactContainer';
import Portrait from './partials/Portrait';
import Forms from './partials/Forms';


//Main contact component. Contains all components related to contact.
const Contact = ()=>{
  return(
    <div>
      <ContactContainer>
        <Portrait />
        {/* <Forms /> */}
      </ContactContainer>
    </div>
  )
}

export default Contact;
