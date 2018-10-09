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
      if(order.data.length !== -1) {
        dispatch(loadOrderData(order.data));
        console.log(order.data)
      }
      dispatch(loadOrderData(order));
      console.log(order.data)
    })
  }
}

export const addOrderData = (authId, orderId) => {
  return dispatch => {
    db.addOrdersToUser(authId, {id: orderId});
  }
}
