import React from 'react';

const OrderReview = props =>  {
    const { orderData } = props;
    return (
      <div>
        <h2>Thank you for your purchase! Order#: {orderData.id}</h2>
      </div>
    )
}

export default OrderReview;
