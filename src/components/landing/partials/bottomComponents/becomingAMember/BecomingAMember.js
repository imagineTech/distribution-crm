import React from 'react';

//header/footer
import TempHeader from '../../TempHeader';
import TempFooter from '../../TempFooter';
import './BecomingAMember.css';

//partials
import BecomingAMemberWrapper from './partials/BecomingAMemberWrapper';


const BecomingAMember = (props) => {
  return(
    <div>
      <BecomingAMemberWrapper>
      <TempHeader/>
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
