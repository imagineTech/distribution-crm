import * as Moltin from '../moltin/index';
import { push } from 'connected-react-router';

export const loadCartData = crtData => {
  return {
    type: "LOAD_CART_DATA",
    payload: crtData
  }
}

export const loadCart = crtId => {
  return dispatch => {
    Moltin.getACart(crtId).then(cart => {
      if(cart.data.length !== -1) {
        dispatch(loadCartData(cart.data));
      }
      dispatch(loadCartData(cart));
    })
  }
}

export const updateCartItemQty = (cartId, itemId, newQty) => {
  return dispatch => {
    Moltin.updateItemQuantity(cartId, itemId, newQty).then(order => {
      dispatch(loadCartData(order));
    })
  }
}

export const removingCartItem = (cartId, itemId, qty) => {
  return dispatch => {
    Moltin.removeCartItem(cartId, itemId, qty).then(order => {
      dispatch(loadCartData(order));
    })
  }
}

export const deleteCart = (cartId) => {
  return dispatch => {
    Moltin.removeCart(cartId).then(cart => {
      dispatch(loadCartData(cart));
    })
  }
}
