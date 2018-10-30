import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
import { Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignOutButton from '../../SignOut';
// import SignOutButton from '../../SignOut';
import * as routes from '../../../constants/routes';
import { db,storage } from '../../../firebase/';

class Profile extends React.Component {

  upload = (e) => {
    e.preventDefault();
    let file = this.fileInput.files[0];
    let upt = storage.child('imgs/'+this.props.uid).put(file);
    upt.on(storage.TaskEvent.STATE_CHANGED, snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log({progress:Math.ceil(progress)});
    }, error => {
      console.log(error);
    }, () => {
      //complete now save url to db
      upt.snapshot.ref.getDownloadURL().then((downloadURL) =>{
        db.ref('profile_images/'+this.props.uid).push().set({url:downloadURL,name:file.name,type:file.type,date:new Date().toUTCString()})
        window.location.reload()
      });


    })
  }
  render(){
    let { profileData, path,url } = this.props;
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
}
export default Profile;
