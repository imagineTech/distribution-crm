import React from 'react';

//Partials
import CompanyWrapper from './partials/CompanyWrapper';
import CompanyTop from './partials/CompanyTop';
import CompanyBottom from './partials/CompanyBottom';
import CompanyContent from './partials/CompanyContent';

const OurCompany = () => {
  return(
    <CompanyWrapper>
      <CompanyContent />
      <CompanyTop />
      <CompanyBottom />
    </CompanyWrapper>
  )
}

export default OurCompany;
