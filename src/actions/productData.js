import * as Moltin from '../moltin/index';

export const loadProductData = (prodData) => {
  return {
    type: "LOAD_PRODUCTS",
    payload: prodData
  }
}

export const loadProductImageData = (imageProductData) => {
  return {
    type: "LOAD_PRODUCT_IMAGE",
    payload: imageProductData,
    imgesExist: false
  }
}

export const loadProducts = () => {
  return dispatch => {
    Moltin.getAllProducts().then(products => {
      dispatch(loadProductData(products));
    })
  }
} 

export const loadProductImage = (productId) => {
  return dispatch => {
    Moltin.getProductImage(productId).then(productImageData => {
      dispatch(loadProductImageData(productImageData))
    })
  }
}