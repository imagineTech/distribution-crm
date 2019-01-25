import React from 'react';

//Components
import ContentWrapper from './ContentWrapper';
import ImageWrapper from './ImageWrapper';
import TextWrapper from './TextWrapper';
import noImage from './no_image.png';
import '../../SoldProducts.css';


const ProductComponent = (props) => {
  return(
    <ContentWrapper className="details">
      {/* <ImageWrapper>
      <img src={noImage} alt="No image available" style={{height: "20vw", minHeight: "180px"}} />
      </ImageWrapper> */}
      <TextWrapper>
        <ImageWrapper>
        {/* <img className="details" alt="Product Image" src={props.productImage ? props.productImage : noImage}/> */}
        <img alt="Product Image" src={props.productImage ? props.productImage : noImage} style={{height: "20vw", minHeight: "180px"}}/>
        </ImageWrapper>
        <h3 className="details">{props.productDescription}</h3>
        <h4 className="details">{props.brandName}</h4>
        <p className="details">Retails at: {props.retailPrice}</p>
        <p className="details">Unit Price: {props.unitPrice}</p>
        <p className="details">Quantity: {props.quantity}</p>
        {/* <p className="details">Total: {props.total}</p> */}
        <p className="details">{props.details}</p>
      </TextWrapper>
    </ContentWrapper>
  )
}



export default ProductComponent;
