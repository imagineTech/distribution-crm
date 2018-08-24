import React, { Component } from 'react';
import * as Moltin from '../../../moltin/index';

class Cart extends Component {
  componentDidMount() {
    Moltin.getACart(this.props.auth.uid).then(cart => console.log(cart));
  }
  render() {
    return(
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default Cart;
