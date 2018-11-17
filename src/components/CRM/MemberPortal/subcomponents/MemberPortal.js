import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../../profile/subcomponents/Profile';
import ProductList from '../../Product/subcomponents/ProductList/ProductList';
import SignOutButton from '../../../SignOut';
import * as routes from '../../../../constants/routes';
import './MemberPortal.css';

class MemberPortal extends React.Component {
  render(){
    return (
      <div>
        <Profile {...this.props} path={routes.PROFILE} /> <br />
        <div className="portal_menu">
        <SignOutButton history={this.props.history}/>
        <Link to={routes.CART}>Cart</Link> <br />
        <Link to={routes.RECENT_ORDERS}>Recently purchased</Link>
        </div>
        <ProductList {...this.props} path={routes.PRODUCTS}/>
      </div>
    );
  }
}
export default MemberPortal;
