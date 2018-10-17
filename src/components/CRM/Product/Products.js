import React, { Component } from 'react';
import asyncComponent from '../../../hoc/async';
import { Route } from 'react-router-dom';
import { loadProducts, loadProductImage } from '../../../actions/productData';
import { addProductsToCart } from '../../../actions/cartData';
import { connect } from 'react-redux';

const AsyncProductItem = asyncComponent(() => {
  return import('./subcomponents/ProductItem');
});

class Products extends Component {

  componentDidMount() {
    const { getProductData, getProductImage } = this.props;
    getProductData();
    getProductImage();
  }

  render() {
    const { auth, path } = this.props;
    return(
      <Route
        exact
        path={`${path}/:productId`}
        render={rest => <AsyncProductItem {...this.props} {...rest} {...auth} /> }
      />
    )
  }
}

export const mapStateToProps = state => {
  const { data, included, imagesExist } = state.loadingProductData
  return {
    productData: data.length !==0 ? data : data,
    imageProductData: imagesExist ? included : included
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
