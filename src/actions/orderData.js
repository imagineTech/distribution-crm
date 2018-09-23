import { db } from '../firebase/index';

export const loadOrderData = ordData => {
  return {
    type: "LOAD_ORDER_DATA",
    payload: ordData
  }
}

export const loadOrder = (authId, orderId) => {
  return dispatch => {
    db.addOrdersToUser(auth.uid, {id: order.data.id});
  }
}
