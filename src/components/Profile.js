/*
  Currently this is the Profile component,
  very small and minimal component. Of course
  will be added onto later.
*/

import React, { Component } from 'react';
import { db } from '../firebase/index';

class Profile extends Component {

  state = {
    userInfo: null
  }

  render() {
    return(
      <div>
        <h1>Profile</h1>
      </div>
    )
  }
}

export default Profile;
