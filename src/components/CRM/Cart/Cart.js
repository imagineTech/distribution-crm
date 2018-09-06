import React, { Component } from 'react';
import * as Moltin from '../../../moltin/index';

class Cart extends Component {

  state = {
    cartItems: []
  };

  componentDidMount() {
    const { auth } = this.props;
    Moltin.getACart(auth.uid).then(cart => {
      this.setState({
        cartItems: this.state.cartItems.concat(cart.data)
      })
    });
  }

  handleClick = e => {
    const { auth } = this.props;
    //hard coded moltin user id. created within moltin cms
    const customerId = "3e8c0676-2d4c-426a-8e8a-065800215b38";
    //hard coded billing
    const billing = {
      first_name: 'Matt',
      last_name: 'Mortensen',
      line_1: '3333 South SomeStreet',
      city: 'West Valley',
      postcode: '84128',
      county: 'Utah',
      country: 'United States'
    }
    //billing becomes shipping, if shipping is undefined
    Moltin.checkoutCart(auth.uid, customerId, billing).then(order => {
      console.log(order);
    })
  }

  render() {
    const { cartItems } = this.state;
    return(
      <div>
        {cartItems.map(item => {
          return(
            <div key={item.id}>
              <span>{item.quantity}</span>
              <span>{item.name}</span>
              <span>{item.meta.display_price.with_tax.unit.formatted}</span>
            </div>
          )
        })}
        <button onClick={this.handleClick}>Checkout</button>
      </div>
    )
  }
}

export default Cart;
