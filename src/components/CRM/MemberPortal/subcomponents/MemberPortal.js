import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../Product/subcomponents/ProductList';
import SignOutButton from '../../../SignOut';
import * as routes from '../../../../constants/routes';

class MemberPortal extends Component {

  render() {
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



export default MemberPortal;
