import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../../profile/subcomponents/Profile';
import ProductList from '../../Product/subcomponents/ProductList';
import SignOutButton from '../../../SignOut';
import * as routes from '../../../../constants/routes';

const MemberPortal = props => {
  return (
    <div>
      <h1>Welcome to our Crm</h1>
      <Profile {...props} path={routes.PROFILE}/> <br />
      <SignOutButton history={props.history}/>
      <Link to={routes.CART}>Cart</Link> <br />
      <Link to={routes.RECENT_ORDERS}>Recently purchased</Link>
      <ProductList {...props} path={routes.PRODUCTS}/>
    </div>
  );
}

export default MemberPortal;
