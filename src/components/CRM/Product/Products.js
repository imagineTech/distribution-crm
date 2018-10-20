import React, { Component } from 'react';
import ProductItem from './subcomponents/ProductItem';
import { Route } from 'react-router-dom';
import { loadProducts, loadProductImage } from '../../../actions/productData';
import { addProductsToCart } from '../../../actions/cartData';
import { connect } from 'react-redux';


class Products extends Component {

  componentDidMount() {
    const { getProductData, getProductImage } = this.props;
    getProductData();
    getProductImage();
  }

  render() {
    const { rest } = this.props;
    return <ProductItem {...this.props} {...rest} /> 
  }
}

export const mapStateToProps = state => {
  const { data, included, imagesExist } = state.loadingProductData
  return {
    productData: data.length !==0 ? data : data,
    imageProductData: imagesExist ? included : included,
    profileData: state.storeProfileData
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getProductData: () => dispatch(loadProducts()),
    getProductImage: () => dispatch(loadProductImage()),
    addProducts: (refId, productId, productQuantity, history) => dispatch(addProductsToCart(refId, productId, productQuantity, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
