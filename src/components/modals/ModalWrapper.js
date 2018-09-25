import React from 'react';

const ModalWrapper = props => {
  const handleBackgroundClick = e => {
    if (e.target === e.currentTarget) props.hideModal();
  };

  const onOK = () => {
    props.onOK();
    props.hideModal();
  };

  const okButton = props.showOK
    ? (
      <button
        onClick={onOK}
        disabled={props.okDisabled}
        >

      </button>
    ) : null;

    return (
      <div onClick={handleBackgroundClick} >
        <header>
          <h1>{props.title}</h1>
          <button onClick={props.hidemodal}>Close</button>
        </header>

        {props.children}

        {okButton}
      </div>
    );


    ModalWrapper.defaultProps = {
      title: '',
      showOK: true,
      okText: 'OK',
      okDisabled: false,
      width: 400,
      onOK: () => {}
    };

};


export default ModalWrapper;
