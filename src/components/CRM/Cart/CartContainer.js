import React, { Component } from "react";
import Cart from "./subcomponents/Cart";
import { loadProfileData } from "../../../actions/profileData";
import { decrementStock } from "../../../actions/productData";
import { addOrderDataToStore } from "../../../actions/orderData";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  loadCart,
  updateCartItemQty,
  checkOutCart,
  removingCartItem,
  deleteCart
} from "../../../actions/cartData";

class CartContainer extends Component {
  componentDidMount() {
    const { getCartData, getProfileData, auth } = this.props;
    getCartData(auth.authUser.uid);
    getProfileData(auth.authUser.uid);
  }

  componentWillReceiveProps(nextProps) {
    const { info, items } = nextProps.orderData;
    if (Object.keys(info).length !== 0 && items.length !== 0) {
      window.location.reload();
    }
  }

  render() {
    const { rest } = this.props;
    return (
      <div>
        <Cart {...this.props} {...rest} />
        {console.log(this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { data } = state.loadingCartData;
  return {
    cartItems: data.length !== 0 ? data : data,
    profileData: state.storeProfileData,
    orderData: state.loadingCurrentOrderData.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: userId => dispatch(loadProfileData(userId)),
    getCartData: crtId => dispatch(loadCart(crtId)),
    updateQty: (cartId, itemId, newQty) => dispatch(updateCartItemQty(cartId, itemId, newQty)),
    removeItm: (cartId, itemId, qty) => dispatch(removingCartItem(cartId, itemId, qty)),
    deleteCrt: cartId => dispatch(deleteCart(cartId)),
    decreaseStock: cart => dispatch(decrementStock(cart)),
    addingOrdDataToStore: (userId, ordId) => dispatch(addOrderDataToStore(userId, ordId)),
    checkOut: (refId, customerId, billing, shipping) => dispatch(checkOutCart(refId, customerId, billing, shipping))
  };
};

CartContainer.propTypes = {
  auth: PropTypes.object.isRequired,
  getCartData: PropTypes.func.isRequired,
  getProfileData: PropTypes.func.isRequired,
  updateQty: PropTypes.func.isRequired,
  removeItm: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
