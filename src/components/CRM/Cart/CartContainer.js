import React, { Component } from 'react';
import Cart from './subcomponents/Cart';
import { loadCart, updateCartItemQty, checkOutCart,removingCartItem, deleteCart } from '../../../actions/cartData';
import { addOrderDataToStore, loadCurrentOrder } from '../../../actions/orderData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CartContainer extends Component {

  componentDidMount() {
    const { profileData, getCartData } = this.props;
    getCartData(profileData.id);
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
    getCartData: (crtId) => dispatch(loadCart(crtId)),
    updateQty: (cartId, itemId, newQty) => dispatch(updateCartItemQty(cartId, itemId, newQty)),
    removeItm: (cartId, itemId, qty) => dispatch(removingCartItem(cartId, itemId, qty)),
    deleteCrt: (cartId) => dispatch(deleteCart(cartId)),
    addingOrdDataToStore: (userId, ordId) => dispatch(addOrderDataToStore(userId, ordId)),
    loadingCrrntOrder: ordId => dispatch(loadCurrentOrder(ordId)),
    checkOut: (refId, customerId, billing, shipping) =>dispatch(checkOutCart(refId, customerId, billing, shipping))
  }
}

CartContainer.propTypes = {
  profileData: PropTypes.shape({
    Company: PropTypes.string.isRequired,
    Country: PropTypes.string.isRequired,
    Department: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    First_Name: PropTypes.string.isRequired,
    Last_Name: PropTypes.string.isRequired,
    Moltin_User_Id: PropTypes.string.isRequired,
    Orders: PropTypes.array.isRequired,
    Password: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  getCartData: PropTypes.func.isRequired,
  rest: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
