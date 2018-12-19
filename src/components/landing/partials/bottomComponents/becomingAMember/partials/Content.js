import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from './../../../../../../constants/routes';

//partials
import ContentWrapper from './ContentWrapper';

const Content = (props) => {
  return (
    <ContentWrapper>
      <h1>QUESTIONS?</h1>
      <p>Get in touch with the company if you have questions about our services!</p>

      <Link to={routes.SIGN_UP} style={{border: 'none', background: '#C02932', color: 'white', height: '40px', width: '150px', fontSize: '20px', borderRadius: '3px'}}>REGISTER</Link>	

    </ContentWrapper>
  )
}

export default Content;