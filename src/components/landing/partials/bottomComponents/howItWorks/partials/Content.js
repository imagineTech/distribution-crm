import React from 'react';
import PropTypes from 'prop-types';

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

ContentWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Content;
