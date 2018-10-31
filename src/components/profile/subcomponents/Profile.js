import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
import * as routes from '../../../constants/routes';

class Profile extends Component {
  render(){
    let { profileData, path,url } = this.props;
    return(
      <div>
        {url!==''?<img src={url} width="150"/>:
        <img className="profilepicture" src="https://dummyimage.com/200x100/000/cccccc&text=Profile+Picture"></img>}
        <h1 className="displayinline">{`${profileData.First_Name} ${profileData.Last_Name}`}</h1>
        <p>Email: {profileData.Email}</p>
        <button><Link to={`${path}/${routes.EDIT_PROFILE}`}>Edit Profile</Link></button>
        <form>
          <input type="file" />
          <button onClick={this.upload}>Upload</button>
        </form>
      </div>
    )
  }
}
export default Profile;
