import { db } from '../firebase/index';
import * as Moltin from '../moltin/index';

export const loadOrderData = ordData => {
  return {
    type: "LOAD_ORDER_DATA",
    payload: ordData
  }
}

export const loadOrder = (orderId) => {
  return dispatch => {
    Moltin.getAnOrder(orderId).then(order => {
      if(order) {
        dispatch(loadOrderData(order.data));
      }
    })
  }
}

export const addOrderData = (authId, orderId) => {
  return dispatch => {
    db.addOrdersToUser(authId, {id: orderId});
  }
}
