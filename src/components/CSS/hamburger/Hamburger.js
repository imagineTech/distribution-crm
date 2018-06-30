import React from 'react';
import { HamContent } from './HamCSS';
import { HamContainer } from './HamCSS';

//Main hamburger component: contains all components related to hamburger
const Hamburger = () => {
    return(
      <HamContainer>
        <HamContent />
        <HamContent />
        <HamContent />
      </HamContainer>
    )
}

export default Hamburger;
