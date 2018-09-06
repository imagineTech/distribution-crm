export const loadingCartData = (state = {}, action) => {
  switch(action.type) {
    case "LOAD_CART_DATA":
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
