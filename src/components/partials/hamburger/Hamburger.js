import React from 'react';
import { HamContent } from './HamCSS';
import { HamContainer } from './HamCSS';

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
