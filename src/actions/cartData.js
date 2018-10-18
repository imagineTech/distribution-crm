import * as Moltin from '../moltin/index';
import * as routes from '../constants/routes';

export const loadCartData = crtData => {
  return {
    type: "LOAD_CART_DATA",
    payload: crtData
  }
}

export const addProductsToCart = (refId, productId, productQuantity, history) => {
  return dispatch => {
    Moltin.addProductsToCart(refId, productId, productQuantity).then(cartItems => {
      history.push(`${routes.CART}`);
    });
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

export const checkOutCart = (refId, customerId, billing, shipping) => {
  return dispatch => {
    return Moltin.checkoutCart(refId, customerId, billing, shipping);
  }
}

export const deleteCart = (cartId) => {
  return dispatch => {
    Moltin.removeCart(cartId).then(cart => {
      dispatch(loadCartData(cart));
    })
  }
}
