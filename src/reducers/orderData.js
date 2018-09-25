export const loadingOrderData = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_ORDER_DATA":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
