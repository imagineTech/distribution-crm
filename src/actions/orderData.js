import { db } from '../firebase/index';
import * as Moltin from '../moltin/index';

export const loadStoredOrderData = ordData => {
  return {
    type: "LOAD_STORED_ORDER_DATA",
    payload: ordData
  }
}

export const addOrderDataToLoad = (orderInfo, orderItems) => {
  return {
    type: "LOAD_CURRENT_ORDER",
    orderInfo,
    orderItems
  }
}

export const loadOrderItemsSuccess = orderItems => {
  return {
    type: "LOAD_ORDER_ITEMS",
    orderItems
  }
}

export const addOrderDataToStore = (authId, orderId) => {
  return dispatch => {
    db.addOrdersToUser(authId, { id: orderId });
  }
}

export const loadOrderItems = orderId => {
  return dispatch => {
    Moltin.getOrderItems(orderId).then(items => {
      dispatch(loadOrderItemsSuccess(items.data));
    })
  }
}

export const loadCurrentOrder = orderId => {
  return dispatch => {
    Moltin.getAnOrder(orderId).then(order => {
      Moltin.getOrderItems(order.data.id).then(orderItems => {
        dispatch(addOrderDataToLoad(order.data, orderItems.data));
      })
    })
  }
}

export const loadRecentOrderData = orderId => {
  return dispatch => {
    Moltin.getOrderItems(orderId).then(items => {
      dispatch(loadStoredOrderData(items.data))
    })
  }
}




