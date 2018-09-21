import React from 'react';
import { Route } from 'react-router-dom';

const OrderReview = props => {
  return (
    <div>
      <h1>Hello</h1>
      {console.log(props.match.path)}
    </div>
  )
}

export default OrderReview;
