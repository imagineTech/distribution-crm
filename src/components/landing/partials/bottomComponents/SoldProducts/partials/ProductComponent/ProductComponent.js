import React from 'react';

//Components
import ContentWrapper from './ContentWrapper';
import ImageWrapper from './ImageWrapper';
import TextWrapper from './TextWrapper';
import Text from './Text';

const ProductComponent = (props) => {
  return(
    <ContentWrapper>
      <ImageWrapper />
      <TextWrapper>
        <Text />
      </TextWrapper>
    </ContentWrapper>
  )
}



export default ProductComponent;
