import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProductList from './subcomponents/ProductList';
import ProductItem from './subcomponents/ProductItem';
import * as routes from '../../../constants/routes';
import { loadProducts } from '../../../actions/productData';
import { connect } from 'react-redux';

class Products extends Component {

  componentDidMount() {
    this.props.getProductData();
  }

  render() {
    const { auth, path } = this.props;
    return(
      <div>
        {auth.authenticated ?
          <div>
            <ProductList {...this.props} />
            <Route
              exact
              path={`${path}/:productId`}
              render={rest => auth.authenticated && <ProductItem {...this.props} {...rest} {...auth} /> }
            />
          </div>
          :
          <p>No products to display</p>
        }
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
