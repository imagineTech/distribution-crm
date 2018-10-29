import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../../profile/subcomponents/Profile';
import ProductList from '../../Product/subcomponents/ProductList';
import SignOutButton from '../../../SignOut';
import * as routes from '../../../../constants/routes';

class MemberPortal extends React.Component {
  render(){
  return (
    <div>
      <h1>Welcome to our Crm</h1>
      <Profile {...this.props} path={routes.PROFILE} url={this.props.url} uid={this.props.uid}/> <br />
      <SignOutButton history={this.props.history}/>
      <Link to={routes.CART}>Cart</Link> <br />
      <Link to={routes.RECENT_ORDERS}>Recently purchased</Link>
      <ProductList {...this.props} path={routes.PRODUCTS}/>
    </div>
  );
}
}
export default MemberPortal;
