import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductList from './subcomponents/ProductList';
import { loadProducts } from '../../../actions/productData';
import { connect } from 'react-redux';

class Products extends Component {

  componentDidMount() {
    this.props.getProductData();
  }

  render() {
    const { comp: Component, auth } = this.props;
    return(
      <div>
        <Route
          exact
          path={`${this.props.path}`}
          render={rest => auth.authenticated ? <ProductList {...this.props} {...rest} /> : <p>Not Found</p>}
        />
        <Route
          exact
          path={`${this.props.path}/:productId`}
          render={rest => auth.authenticated ? <Component {...this.props} {...rest} {...auth} /> : <p>Not Found</p>}
        />
        </div>
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
