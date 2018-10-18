import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Address from './subcomponents/Address';
import CartList from './subcomponents/List';
import CheckoutButton from './subcomponents/CheckoutBtn';
import { loadCart, updateCartItemQty, checkOutCart,removingCartItem, deleteCart } from '../../../actions/cartData';
import { addOrderData } from '../../../actions/orderData';
import { connect } from 'react-redux';

class Cart extends Component {

  state = {
    addressValues: {}
  }

  componentDidMount() {
    const { auth, getCartData } = this.props;
    getCartData(auth.uid);
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

const mapStateToProps = state => {
  const { data } = state.loadingCartData
  return {
    cartItems: data.length !== 0 ? data : data,
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCartData: (crtId) => dispatch(loadCart(crtId)),
    updateQty: (cartId, itemId, newQty) => dispatch(updateCartItemQty(cartId, itemId, newQty)),
    removeItm: (cartId, itemId, qty) => dispatch(removingCartItem(cartId, itemId, qty)),
    deleteCrt: (cartId) => dispatch(deleteCart(cartId)),
    addingOrdData: (authId, ordId) => dispatch(addOrderData(authId, ordId)),
    checkOut: (refId, customerId, billing, shipping) =>dispatch(checkOutCart(refId, customerId, billing, shipping))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(Cart));
