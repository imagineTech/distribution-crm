import React, { Component } from 'react';
import * as Moltin from '../../../moltin/index';
import { loadCart } from '../../../actions/cartData';
import { connect } from 'react-redux';

class Cart extends Component {

  componentDidMount() {
    const { auth, getCartData } = this.props;
    getCartData(auth.uid);
  }

  handleClick = e => {
    const { auth } = this.props;
    //hard coded moltin user id. created within moltin cms
    const customerId = "2f3f7617-b1ed-4c49-941d-532cbf7118a3";
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
    const { cartItems } = this.props;
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

const mapStateToProps = state => {
  return {
    cartItems: state.loadingCartData.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCartData: (crtId) => dispatch(loadCart(crtId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
