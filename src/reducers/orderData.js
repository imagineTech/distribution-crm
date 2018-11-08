export const loadingCurrentOrderData = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_CURRENT_ORDER":
      return {
        ...state,
        data: {
          ...state.data,
          info: { ...state.data.info, ...action.orderInfo}, 
          items: [ ...state.data.items, {...action.orderItems[0]}]
        }
      };
    default:
      return state;
  }
};

export const loadStoredOrderData = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_STORED_ORDER_DATA":
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        }
      };
    default:
      return state;
  }
};