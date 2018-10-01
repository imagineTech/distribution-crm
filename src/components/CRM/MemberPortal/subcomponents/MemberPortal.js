import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Products from '../../Product/Products';
import ProductItem from '../../Product/subcomponents/ProductItem';
import SignOutButton from '../../../SignOut';
import { connect } from 'react-redux';
import * as routes from '../../../../constants/routes';

class MemberPortal extends Component {

  render() {
    const { auth } = this.props;
    return (
      <div>
        <h1>Welcome to our Crm</h1>
        <Link to={routes.PROFILE}>Profile</Link> <br />
        <Link to={routes.CART}>Cart</Link> <br />
        <Products auth={auth} path={routes.PRODUCTS}/>
        <SignOutButton />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberPortal);
