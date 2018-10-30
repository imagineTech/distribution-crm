import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../../profile/subcomponents/Profile';
import ProductList from '../../Product/subcomponents/ProductList/ProductList';
import SignOutButton from '../../../SignOut';
import * as routes from '../../../../constants/routes';

const MemberPortal = props => {

  return (
    <div className="memberPortal">
        <Profile {...props} path={routes.PROFILE}/> <br />
        <ProductList {...props} path={routes.PRODUCTS}/>
    </div>
  );
}
export default MemberPortal;
