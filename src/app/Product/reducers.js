export const loadingProductData = (state = {}, action) => {
  switch(action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
