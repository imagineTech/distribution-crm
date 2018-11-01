import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../../profile/subcomponents/Profile';
import ProductList from '../../Product/subcomponents/ProductList';
import SignOutButton from '../../../SignOut';
import * as routes from '../../../../constants/routes';

class MemberPortal extends React.Component {
  render(){
    const { profileData } = this.props;
    return (
      <div>
        <Profile {...this.props} path={routes.PROFILE} /> <br />
        {console.log(profileData.Orders)}
        <SignOutButton history={this.props.history}/>
        <Link to={routes.CART}>Cart</Link> <br />
        <Link to={routes.RECENT_ORDERS}>Recently purchased</Link>
        <ProductList {...this.props} path={routes.PRODUCTS}/>
      </div>
    );
  }
}
export default MemberPortal;
