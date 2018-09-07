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
    const { auth, profileData } = this.props;
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
    Moltin.checkoutCart(auth.uid, profileData.Moltin_User_Id, billing).then(order => {
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
    cartItems: state.loadingCartData.data,
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCartData: (crtId) => dispatch(loadCart(crtId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
