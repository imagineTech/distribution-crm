import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../../SignOut';
import * as routes from '../../../constants/routes';

const Profile = ({ profileData, match }) => {
  return(
    <div>
      <h1>{`${profileData.First_Name} ${profileData.Last_Name}`}</h1>
      <p>Email: {profileData.Email}</p>
      <button><Link to={`${match.url}/${routes.EDIT_PROFILE}`}>Edit Profile</Link></button>
      <SignOutButton />
    </div>
  )
}

export default Profile;
