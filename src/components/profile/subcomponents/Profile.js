import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../../constants/routes';
import {database,storage} from '../../../firebase/config_firebase';
import {firebase}  from '../../../firebase/config_firebase';

class Profile extends React.Component {
 
  upload = (e) => {
    e.preventDefault();
    let file = this.fileInput.files[0];
    let upt = storage.child('imgs/'+this.props.uid).put(file);
    upt.on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log({progress:Math.ceil(progress)});
    }, error => {
      console.log(error);
    }, () => {
      //complete now save url to db
      upt.snapshot.ref.getDownloadURL().then((downloadURL) =>{
        database.ref('profile_images/'+this.props.uid).push().set({url:downloadURL,name:file.name,type:file.type,date:new Date().toUTCString()})
        window.location.reload()
      });
      
      
    })
  }
  render(){
    let { profileData, path,url } = this.props;
  return(
    <div>
      <h1>{`${profileData.First_Name} ${profileData.Last_Name}`}</h1>
      {url!==''?<img src={url} width="150"/>:'No profile photo'}
      <p>Email: {profileData.Email}</p>
      <button><Link to={`${path}/${routes.EDIT_PROFILE}`}>Edit Profile</Link></button>
      <form>
        <input type="file" ref={input => this.fileInput = input}/>
        <button onClick={this.upload}>Upload</button>
      </form>
    </div>
  )
}
}

export default Profile;
