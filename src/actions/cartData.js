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
