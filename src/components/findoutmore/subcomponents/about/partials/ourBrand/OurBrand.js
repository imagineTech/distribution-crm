import React from 'react';

//Partials
import BrandWrapper from './partials/BrandWrapper';
import BrandTop from './partials/BrandTop';
import BrandBottom from './partials/BrandBottom';
import BrandContent from './partials/BrandContent';

const OurBrand = () => {
  return(
    <BrandWrapper>
      <BrandContent />
      <BrandTop />
      <BrandBottom />
    </BrandWrapper>
  )
}

export default OurBrand;
