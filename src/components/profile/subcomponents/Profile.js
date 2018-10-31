import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
import * as routes from '../../../constants/routes';

class Profile extends Component {

  state = {
    imageFile: {}
  }

  files = e => {
    this.setState({ imageFile: e.target.files[0]})
  }

  sendUpload = e => {
    const { upload, profileData } = this.props;
    const { imageFile } = this.state;
    e.preventDefault();
    upload(profileData.id, imageFile);
  }

  render(){
    let { profileData, path } = this.props;
    return(
      <div>
        <h1 className="displayinline">{`${profileData.First_Name} ${profileData.Last_Name}`}</h1>
        <p>Email: {profileData.Email}</p>
        <button><Link to={`${path}/${routes.EDIT_PROFILE}`}>Edit Profile</Link></button>
        <form onSubmit={this.sendUpload}>
          <input type="file" onChange={this.files}/>
          <button >Upload</button>
        </form>
      </div>
    )
  }
}
export default Profile;
