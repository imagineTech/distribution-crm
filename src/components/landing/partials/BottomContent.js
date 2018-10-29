import React from 'react';
import PropTypes from 'prop-types';

//CSS
import '../landing.css';

const BottomContent = (props) => {
  return(
    <div className='bottom-image-container'>
      {props.bottomLinks}
    </div>
  )
}

BottomContent.propTypes = {
  bottomLinks: PropTypes.element.isRequired,
  images: PropTypes.string.isRequired
}

export default BottomContent;
