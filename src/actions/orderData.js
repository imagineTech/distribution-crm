import { db } from '../firebase/index';
import * as Moltin from '../moltin/index';

export const loadStoredOrderData = ordData => {
  return {
    type: "LOAD_STORED_ORDER_DATA",
    payload: ordData
  }
}

export const addOrderDataToLoad = order => {
  return {
    type: "LOAD_CURRENT_ORDER",
    order
  }
}

export const addOrderDataToStore = (authId, orderId) => {
  return dispatch => {
    db.addOrdersToUser(authId, { id: orderId });
  }
}

export const loadCurrentOrder = (orderId) => {
  return dispatch => {
    Moltin.getAnOrder(orderId).then(order => {
      dispatch(addOrderDataToLoad(order));
    })
  }
}




