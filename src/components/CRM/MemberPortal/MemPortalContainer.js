import React, { Component } from 'react';
import asyncComponent from '../../../hoc/async';
import { Route } from 'react-router-dom';
import { loadProducts, loadProductImage } from '../../../actions/productData';
import { connect } from 'react-redux';

const AsyncMemberPortal = asyncComponent(() => {
  return import('./subcomponents/MemberPortal');
});

class MemberPortalContainer extends Component {

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
        path={`${path}`}
        render={rest => <AsyncMemberPortal {...this.props}  {...auth} {...rest} />}
      />
    )
  }
}

const mapStateToProps = state => {
  const { data, included, imagesExist } = state.loadingProductData
  return {
    productData: data.length !==0 ? data : data,
    imageProductData: imagesExist ? included : included,
    imagesExist
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getProductData: () => dispatch(loadProducts()),
    getProductImage: () => dispatch(loadProductImage())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberPortalContainer);
