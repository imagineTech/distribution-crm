import React from 'react';
import PropTypes from 'prop-types';

//Wrapper
import ContentWrapper from './ContentWrapper';

const Content = (props) => {
  return(
    <ContentWrapper>
      <p style={{fontSize: '20px', margin: 0}}>{props.title}</p>
      <p style={{margin: "15px 0 30px 0"}}>{props.description}</p>
    </ContentWrapper>
  )
}

ContentWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Content;
