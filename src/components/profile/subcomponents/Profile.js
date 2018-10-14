import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';

const Profile = ({ profileData, path }) => {
  return(
    <div>
      <h1>{`${profileData.First_Name} ${profileData.Last_Name}`}</h1>
      <p>Email: {profileData.Email}</p>
      <button><Link to={`${path}/${routes.EDIT_PROFILE}`}>Edit Profile</Link></button>
    </div>
  )
}

export default Profile;
