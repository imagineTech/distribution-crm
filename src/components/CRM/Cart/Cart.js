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
    
  }

  render() {
    const { cartItems } = this.state;
    const { auth } = this.props;
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
