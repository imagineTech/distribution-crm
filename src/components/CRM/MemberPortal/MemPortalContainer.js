import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { loadProducts, loadProductImage } from '../../../actions/productData';
import { connect } from 'react-redux';

class MemberPortalContainer extends Component {

  componentDidMount() {
    const { getProductData, getProductImage } = this.props;
    getProductData();
    getProductImage();
  }

  render() {
    const { comp: Component, auth } = this.props;
    return(
      <Route
        exact
        path={`${this.props.path}`}
        render={rest => <Component {...this.props}  {...auth} />}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    productData: state.loadingProductData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductData: () => dispatch(loadProducts()),
    getProductImage: (productId) => dispatch(loadProductImage(productId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberPortalContainer);
