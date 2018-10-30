import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignOutButton from '../../SignOut';
// import SignOutButton from '../../SignOut';
import * as routes from '../../../constants/routes';

const Profile = ({ profileData, path }) => {
  return(
    <div className="profileContainer">
      <h1 className="firstandlast">Hello, {`${profileData.First_Name} ${profileData.Last_Name}`}</h1>
      <div className="navLinksProfile">
        <Link className="navLinkProfile" to={routes.CART}>Cart</Link>
        <Link className="navLinkProfile" to={routes.RECENT_ORDERS}>Recently purchased</Link>
        <Link className="navLinkProfile" to={`${path}/${routes.EDIT_PROFILE}`}>Edit Profile</Link>
        <SignOutButton className="navLinkProfile" />
      </div>
    </div>
  )
}

export default Profile;
