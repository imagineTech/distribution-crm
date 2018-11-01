import React from 'react';

const OrderReview = props =>  {
    const { profileData, orderData, match } = props;
    return (
      <div>
        <h2>Thank you for your purchase, {profileData.First_Name} {profileData.Last_Name}!  Your Order#: {orderData.info.id === match.params.orderId ? orderData.info.id : match.params.orderId}</h2>
        <section>
          <h3>Your Order Review: </h3>
          {orderData.items.map(item => {
            return (
              <div key={item.id}>
                <p>Product Name: {item.name}</p>
                <p>Product Quantity: {item.quantity}</p>
                <p>Total: {item.meta.display_price.with_tax.value.formatted} ({item.meta.display_price.with_tax.unit.formatted} x {item.quantity} )</p>
              </div>
            )
          })}
          {console.log(profileData.Orders)}
        </section>
      </div>
    )
}

export default OrderReview;
