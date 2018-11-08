import React, { Component } from 'react';
import Cart from './subcomponents/Cart';
import { loadProfileData } from '../../../actions/profileData';
import { decrementStock } from '../../../actions/productData';
import { loadCart, updateCartItemQty, checkOutCart,removingCartItem, deleteCart } from '../../../actions/cartData';
import { addOrderDataToStore } from '../../../actions/orderData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CartContainer extends Component {

  componentDidMount() {
    const { getCartData, auth } = this.props;
    getCartData(auth.authUser.uid);
  }

  componentWillReceiveProps(nextProps) {
    const { getProfileData, auth } = nextProps;
    if (nextProps.profileData === this.props.profileData) {
      getProfileData(auth.authUser.uid);
    }
  }

  render() {
    const { rest } = this.props;
    return <Cart {...this.props}  {...rest} />
  }
}

const mapStateToProps = state => {
  const { data } = state.loadingCartData;
  return {
    cartItems: data.length !== 0 ? data : data,
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: userId => dispatch(loadProfileData(userId)),
    getCartData: (crtId) => dispatch(loadCart(crtId)),
    updateQty: (cartId, itemId, newQty) => dispatch(updateCartItemQty(cartId, itemId, newQty)),
    removeItm: (cartId, itemId, qty) => dispatch(removingCartItem(cartId, itemId, qty)),
    deleteCrt: (cartId) => dispatch(deleteCart(cartId)),
    decreaseStock: cart => dispatch(decrementStock(cart)),
    addingOrdDataToStore: (userId, ordId) => dispatch(addOrderDataToStore(userId, ordId)),
    checkOut: (refId, customerId, billing, shipping) =>dispatch(checkOutCart(refId, customerId, billing, shipping))
  }
}

CartContainer.propTypes = {
  auth: PropTypes.object.isRequired,
  getCartData: PropTypes.func.isRequired,
  getProfileData: PropTypes.func.isRequired,
  updateQty: PropTypes.func.isRequired,
  removeItm: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
