import React from 'react';

const OrderReview = props =>  {
    const { orderData, match } = props;
    return (
      <div>
        <h2>Thank you for your purchase! Order#: {orderData.id === match.params.orderId ? orderData.id : match.params.orderId}</h2>
      </div>
    )
}

export default OrderReview;
