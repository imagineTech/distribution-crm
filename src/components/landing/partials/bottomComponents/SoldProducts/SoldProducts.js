import React from 'react';

import

//Components
import Heading from './partials/Heading';
import ProductWrapper from './partials/ProductWrapper';
import ProductComponent from './partials/ProductComponent/ProductComponent';

const SoldProducts = () => {
  return(
    <div>
      <Heading>Products we have sold</Heading><hr />
      <ProductWrapper>
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </ProductWrapper>
    </div>
  )
}

export default SoldProducts;
