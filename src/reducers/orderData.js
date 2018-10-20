export const loadingCurrentOrderData = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_CURRENT_ORDER":
      return {
        ...state,
        data: [
          ...state.data,
          ...action.order.data
        ]
      };
    default:
      return state;
  }
}
