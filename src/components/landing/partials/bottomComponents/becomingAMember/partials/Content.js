import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from './../../../../../../constants/routes';

//partials
import ContentWrapper from './ContentWrapper';

const Content = (props) => {
  return (
    <ContentWrapper>

      <h1>Questions?</h1>
      <p>Get in touch with the company if you have questions about our services!</p>

      <Link to={{pathname: routes.CONTACT, state: { modal: true } }} style={{textDecoration: 'none', color: 'white'}}>
        <div style={{border: 'none', background: '#C02932', height: '40px', width: '150px', fontSize: '22px', borderRadius: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0}}>CONTACT</div>
      </Link>

    </ContentWrapper>
  )
}

export default Content;