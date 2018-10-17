import React, { Component } from 'react';
import asyncComponent from '../../../hoc/async';
import { loadCart, updateCartItemQty, checkOutCart,removingCartItem, deleteCart } from '../../../actions/cartData';
import { addOrderData } from '../../../actions/orderData';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const AsyncCart = asyncComponent(() => {
    return import('./subcomponents/Cart')
})

class CartContainer extends Component {

  componentDidMount() {
    const { auth, getCartData } = this.props;
    getCartData(auth.uid);
  }

  render() {
    const { path, auth } = this.props;
    return(
            <Route 
                exact
                path={`${path}`}
                render={rest => <AsyncCart {...this.props}  {...auth} {...rest} />}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
