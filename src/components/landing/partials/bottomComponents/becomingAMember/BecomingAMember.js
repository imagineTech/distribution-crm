import React from 'react';

//header/footer
import TempHeader from '../../TempHeader';
import TempFooter from '../../TempFooter';


//partials
import BecomingAMemberWrapper from './partials/BecomingAMemberWrapper';

const BecomingAMember = (props) => {
  return(
    <div>
      <TempHeader />
      <BecomingAMemberWrapper>

      </BecomingAMemberWrapper>
      <TempFooter />
    </div>
  )
}

export default BecomingAMember;
