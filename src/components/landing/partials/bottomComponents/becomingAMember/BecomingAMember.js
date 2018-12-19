import React from 'react';
import './BecomingAMember.css';
import { Link } from 'react-router-dom'
import * as routes from './../../../../../constants/routes';

//partials
import BecomingAMemberWrapper from './partials/BecomingAMemberWrapper';
import TopBanner from './partials/TopBanner';

const BecomingAMember = (props) => {
  return(
    <div className="trial">
      {/* <TopBanner /> */}
      <BecomingAMemberWrapper>
        <h1>Welcome to Global Trade Deals!</h1>

        <p>
          Global Trade Deals considers its clients as business partners and does not favor any clients above the others. Registered clients enjoy exclusive rights such as:
        </p>
        <ul>
          <li>Direct communication with GTD specialists</li>
          <li>Text notifications about profitable new products</li>
          <li>Guaranteed identity protection</li>
          <li>Bottom line pricing</li>
        </ul>
      
        <p>Interested? Click below to view the registration </p>

        <Link to={routes.SIGN_UP} style={{border: 'none', background: '#C02932', color: 'white', height: '40px', width: '150px', fontSize: '20px', borderRadius: '3px'}}>REGISTER</Link>
        
      </BecomingAMemberWrapper>
    </div>
  )
}

export default BecomingAMember;
