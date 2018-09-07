import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../../SignOut';
import * as routes from '../../../constants/routes';

const Profile = ({ profileData, match }) => {
  return(
    <div>
      <h1>{profileData.Name}</h1>
      <p>Email: {profileData.Email}</p>
      <button><Link to={`${match.url}/${routes.EDIT_PROFILE}`}>Edit Profile</Link></button>
      <SignOutButton />
    </div>
  )
}

export default Profile;
