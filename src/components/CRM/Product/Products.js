import React, { Component } from 'react';
import ProductItem from './subcomponents/ProductItem';
import { loadProducts, loadProductImage, loadProductInventory } from '../../../actions/productData';
import { addProductsToCart } from '../../../actions/cartData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class Products extends Component {

  componentDidMount() {
    const { getProductData, getProductImage } = this.props;
    getProductData();
    getProductImage();
  }

  componentWillReceiveProps(nextProps) {
    const { getProductInventory } = this.props;
    if(nextProps.productData !== this.props.productData) {
      getProductInventory(nextProps.productData);
    }
  }

  render() {
    return <ProductItem {...this.props}  /> 
  }
}

export const mapStateToProps = state => {
  const { data, included, imagesExist, inventory } = state.loadingProductData
  return {
    productData: data.length !==0 ? data : data,
    imageProductData: imagesExist ? included : included,
    profileData: state.storeProfileData,
    inventoryData: inventory,
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getProductData: () => dispatch(loadProducts()),
    getProductImage: () => dispatch(loadProductImage()),
    getProductInventory: products => dispatch(loadProductInventory(products)),
    addProducts: (refId, productId, productQuantity, history) => dispatch(addProductsToCart(refId, productId, productQuantity, history))
  }
}

Products.propTypes = {
  getProductData: PropTypes.func.isRequired,
  getProductImage: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
