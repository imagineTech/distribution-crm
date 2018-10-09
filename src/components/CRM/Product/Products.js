import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import { loadProducts } from '../../../actions/productData';
import { connect } from 'react-redux';

class Products extends Component {

  componentDidMount() {
    this.props.getProductData();
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
    productData: state.loadingProductData.data
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    getProductData: () => dispatch(loadProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
