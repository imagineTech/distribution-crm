export const loadingProductData = (state = {}, action) => {
  switch(action.type) {
    case "LOAD_PRODUCTS":
      return {
        ...state,
        ...action.payload
      }
    case "LOAD_PRODUCT_IMAGE":
      return {
        ...state,
        ...action.payload,
        imagesExist: !action.imagesExist
      }
    default:
      return state;
  }
}

export const decrementProductStock = (state = {}, action) => {
  switch(action.type) {
    case "INVENTORY_DECREMENT_SUCCESS":
      return {
        ...state,
        inventory: {...state.inventory, ...action.inventory}
      }
    default: 
      return state;
  }
}
