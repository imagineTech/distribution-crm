import React from 'react';

//Components
import ContentWrapper from './ContentWrapper';
import ImageWrapper from './ImageWrapper';
import TextWrapper from './TextWrapper';

import '../../SoldProducts.css';


const ProductComponent = (props) => {
  return(
    <ContentWrapper className="details">
      <ImageWrapper />
      <TextWrapper>
        <h3 className="details">Brand: {props.brandName}</h3>
        <h3 className="details">Product Name: {props.productDescription}</h3>
        <h3 className="details">Retails at: {props.retailPrice}</h3>
        <h3 className="details">Unit Price: {props.unitPrice}</h3>
        <h3 className="details">Quantity: {props.quantity}</h3>
        <h3 className="details">Total: {props.total}</h3>
        <h3 className="details">{props.details}</h3>
      </TextWrapper>
    </ContentWrapper>
  )
}



export default ProductComponent;
