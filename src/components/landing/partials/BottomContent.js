import React from 'react';

//CSS
import '../landing.css';

const BottomContent = (props) => {
  return(
    <div className='bottom-image-container'>
      {props.bottomLinks}
    </div>
  )
}

export default BottomContent;