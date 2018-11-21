export const loadingProductData = (state = {}, action) => {
  switch (action.type) {
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
    case "LOAD_PRODUCT_INVENTORY": 
      return {
        ...state,
        inventory: {...action.inventory}
      }
    default:
      return state;
  }
}

export const decrementProductStock = (state = "", action) => {
  switch (action.type) {
    case "INVENTORY_DECREMENT_SUCCESS":
      return action.message;
    default:
      return state;
  }
}
