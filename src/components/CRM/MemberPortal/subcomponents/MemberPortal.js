import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../Product/subcomponents/ProductList';
import SignOutButton from '../../../SignOut';
import { loadProducts } from '../../../../actions/productData';
import { connect } from 'react-redux';
import * as routes from '../../../../constants/routes';

class MemberPortal extends Component {

  componentDidMount() {
    this.props.getProductData();
  }

  render() {
    const { auth } = this.props;
    return (
      <div>
        <h1>Welcome to our Crm</h1>
        <Link to={routes.PROFILE}>Profile</Link> <br />
        <Link to={routes.CART}>Cart</Link> <br />
        <ProductList {...this.props} path={routes.PRODUCTS}/>
        <SignOutButton />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    productData: state.loadingProductData.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductData: () => dispatch(loadProducts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberPortal);
