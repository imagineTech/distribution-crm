import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
import * as routes from '../../../constants/routes';

const Profile = ({ profileData, path }) => {
  return(
    <div>
      <img className="profilepicture" src="https://dummyimage.com/200x100/000/cccccc&text=Profile+Picture"></img>
      <h1 className="displayinline">{`${profileData.First_Name} ${profileData.Last_Name}`}</h1>
      <p>Email: {profileData.Email}</p>
      <button><Link to={`${path}/${routes.EDIT_PROFILE}`}>Edit Profile</Link></button>
    </div>
  )
}

export default Profile;
