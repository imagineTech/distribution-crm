import React from 'react';
import asyncComponent from '../../../../hoc/async';
import { Link } from 'react-router-dom';
import SignOutButton from '../../../SignOut';
import * as routes from '../../../../constants/routes';

const AsyncProfile = asyncComponent(() => {
  return import('../../../profile/subcomponents/Profile');
});
const AsyncProductList = asyncComponent(() => {
  return import('../../Product/subcomponents/ProductList');
});

const MemberPortal = props => {
  return (
    <div>
      <h1>Welcome to our Crm</h1>
      <AsyncProfile {...props} path={routes.PROFILE}/> <br />
      <Link to={routes.CART}>Cart</Link> <br />
      <AsyncProductList {...props} path={routes.PRODUCTS}/>
      <SignOutButton history={props.history}/>
    </div>
  );
}

export default MemberPortal;
