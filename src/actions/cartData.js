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
      if(cart.data.length === 0) {
        dispatch(loadCartData(cart));
      }
      dispatch(loadCartData(cart.data));
    })
  }
}

export const updateCartItemQty = (cartId, itemId, newQty) => {
  return dispatch => {
    Moltin.updateItemQuantity(cartId, itemId, newQty).then(cart => {
      dispatch(loadCartData(cart));
    })
  }
}

export const removingCartItem = (cartId, itemId, qty) => {
  return dispatch => {
    Moltin.removeCartItem(cartId, itemId, qty).then(cart => {
      dispatch(loadCartData(cart));
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
