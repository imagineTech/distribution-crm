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
    default:
      return state;
  }
}

export const decrementProductStock = (state = {}, action) => {
  switch (action.type) {
    case "INVENTORY_DECREMENT_SUCCESS":
      return {
        ...state,
        new_amount: [
          ...state.new_amount,
          {
            message: action.new_amount.message,
            productId: action.new_amount.productId,
            quantity: action.new_amount.quantity,
            type: action.new_amount.type
          }
        ]
      }
    default:
      return state;
  }
}
