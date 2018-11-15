import React from 'react';
import './BecomingAMember.css';

//partials
import BecomingAMemberWrapper from './partials/BecomingAMemberWrapper';
import TopBanner from './partials/TopBanner';

const BecomingAMember = (props) => {
  return(
    <div className="trial">
      <TopBanner />
      <BecomingAMemberWrapper>
        <h1>BECOMING A MEMBER</h1>
        <p>Candidates must have a registered business. To become a member, just follow the simple 3 step process below</p>
        <div class="container">
          <ul class="progressbar">
              <li class="active">Apply</li>
              <li>Wait for approval</li>
              <li class="active">Verification Email Delivery</li>
          </ul>
        </div>
      </BecomingAMemberWrapper>
    </div>
  )
}

export default BecomingAMember;
