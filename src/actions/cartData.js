import * as Moltin from '../moltin/index';

export const loadCartData = crtData => {
  return {
    type: "LOAD_CART_DATA",
    payload: crtData
  }
}

export const loadCart = crtId => {
  return dispatch => {
    Moltin.getACart(crtId).then(cart => {
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
