import React from 'react';
import KupidoLogo from './KupidoLogo';
import Button from '../../CSS/Button';
import { LandingLinks } from '../../Navigation';


//Contains the content inside the landing page.
const Header = () => {
    return (
      <header>
        <KupidoLogo >Kupido Wholesale LLC</KupidoLogo>
        <h2 className='header-text'>Large Scale Cosmetics and Beauty Product Wholesalers!</h2>
        <h2 className='header-text'> 10 Year Industry Leaders!</h2>
        <h2 className='header-text'>Top Brands!</h2>
        <h2 className='header-text'>Call Us: 908.546.0561 (Ask for Jay)</h2><br />
        <LandingLinks />
      </header>
  );
};


export default Header;
