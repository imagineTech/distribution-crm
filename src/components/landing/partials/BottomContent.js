import React from 'react';

//CSS
import '../landing.css';

//bottomComponents
import LandingButton from './bottomComponents/LandingButton';
import IndividualComponentWrapper from './bottomComponents/IndividualComponentWrapper';



const BottomContent = (props) => {
  return(
    <IndividualComponentWrapper>
      <div className='bottom-image-container'>
        <img className="bottom-images" src= {props.images} />
      </div>
        {props.bottomLinks}
    </IndividualComponentWrapper>
  )
}

export default BottomContent;
