import React from 'react';

//Wrapper
import ContentWrapper from './ContentWrapper';

const Content = (props) => {
  return(
    <ContentWrapper>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </ContentWrapper>
  )
}

export default Content;
