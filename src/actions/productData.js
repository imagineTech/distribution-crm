import * as Moltin from '../moltin/index';

export const loadProductData = prodData => {
  return {
    type: "LOAD_PRODUCTS",
    payload: prodData
  }
}

export const loadProductImageData = imageProductData => {
  return {
    type: "LOAD_PRODUCT_IMAGE",
    payload: imageProductData,
    imgesExist: false
  }
}

export const decrementSuccess = inventory => {
  return {
    type: "INVENTORY_DECREMENT_SUCCESS",
    inventory
  }
}

export const loadProducts = () => {
  return dispatch => {
    Moltin.getAllProducts().then(products => {
      dispatch(loadProductData(products));
    })
  }
} 

export const loadProductImage = productId => {
  return dispatch => {
    Moltin.getProductImage(productId).then(productImageData => {
      dispatch(loadProductImageData(productImageData))
    })
  }
}

export const decrementStock = (productId, quantity) => {
  return dispatch => {
    Moltin.decreaseProductStock(productId, quantity).then(inventory => {
      dispatch(decrementSuccess(inventory.data))
    })
  }
}