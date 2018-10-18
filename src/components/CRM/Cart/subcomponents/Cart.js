import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Address from './Address';
import CartList from './List';
import CheckoutButton from './CheckoutBtn';

class Cart extends Component {

  state = {
    addressValues: {}
  }

  render() {
    return(
      <div>
        <CartList {...this.props} />
        <CardElement />
        <Address formDataToSend={values => (
          this.setState({
            addressValues: {...values}
          })
        )}/>
        <CheckoutButton {...this.props} {...this.state} />
      </div>
    )
  }
}

export default injectStripe(Cart);
