import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css'
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
    <div>
      {url!==''?<img src={url} width="150"/>:
      <img className="profilepicture" src="https://dummyimage.com/200x100/000/cccccc&text=Profile+Picture"></img>}
      <h1 className="displayinline">{`${profileData.First_Name} ${profileData.Last_Name}`}</h1>
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
