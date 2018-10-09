import React from 'react';

import ModalWrapper from './ModalWrapper';

  const Sign = (props) => {
    const sign = (provider) => {
      props.hideModal();
      props.sign(provider);
    }

  return(
    <ModalWrapper
      {...props}
      title="Sign In"
      width={400}
      showOK={false}
      >
      <p>My very first modal! :) </p>
      <p>This is the fake sign in modal hehehe</p>
      <p>I hope you like it!</p>

    </ModalWrapper>
  )


}

export default Sign;
