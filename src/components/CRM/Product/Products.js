import React, { Component } from 'react';
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
    const { comp: Component, auth, path } = this.props;
    return(
      <Route
        exact
        path={`${path}/:productId`}
        render={rest => <Component {...this.props} {...rest} {...auth} /> }
      />
    )
  }
}

export const mapStateToProps = state => {
  return {
    productData: state.loadingProductData
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
