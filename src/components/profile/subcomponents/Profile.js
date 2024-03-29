import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignOutButton from '../../SignOut';
// import SignOutButton from '../../SignOut';
import * as routes from '../../../constants/routes';
import PropTypes from 'prop-types';
import './Profile.css';


class Profile extends Component {

  state = {
    imageFile: {},
    isNewUpload: false
  }

  files = e => {
    this.setState({ imageFile: e.target.files[0]})
  }

  sendUpload = e => {
    const { uploadProfileImage, profileData } = this.props;
    const { imageFile } = this.state;
    e.preventDefault();
    uploadProfileImage(profileData.id, imageFile, window);
  }

  newUpload = () => {
    this.setState({isNewUpload: true})
  }
  
  render(){
    let { profileData, path } = this.props;
    let url = profileData.Profile_Image_URL;
    let {isNewUpload} = this.state;
    return(
      <div>
      <div className="card">
        {isNewUpload && <div>
          <form onSubmit={this.sendUpload}>
            <input type="file" onChange={this.files}/>
            <button >Upload</button>
          </form>
        </div>}
        <figure>
          {url !== undefined ?
          <img src={url} alt={"profile_image_" + profileData.id} width="50px" style={{borderRadius:'50%'}}/> : <img src="" alt="no_profile_image" width="300px"/>
          }
        </figure>
        <h1>{`${profileData.First_Name} ${profileData.Last_Name}`}</h1>
        {/*<p>{profileData.Email}</p>*/}
      </div>
      <div className="profile">
        <button><Link to={`${path}/${routes.EDIT_PROFILE}`}>Edit Profile</Link></button>
        <button onClick={this.newUpload}>Update Photo</button>
      </div>
      
      </div>
    )
  }
}

Profile.prototypes = {
  profileData: PropTypes.shape({
    Company: PropTypes.string.isRequired,
    Country: PropTypes.string.isRequired,
    Department: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    First_Name: PropTypes.string.isRequired,
    Last_Name: PropTypes.string.isRequired,
    Moltin_User_Id: PropTypes.string.isRequired,
    Orders: PropTypes.array.isRequired,
    Password: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
}
export default Profile;
