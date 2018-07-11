/*
  UPDATE: Now supporting redux calls
  right testing out how profile data is
  being stored.

*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../components/SignOut';
import { connect } from 'react-redux';
import * as routes from '../constants/routes';

class Profile extends Component {


  render() {
    return(
      <div>
        <h1>{this.props.profileData.Name}</h1>
        <p>Email: {this.props.profileData.Email}</p>
        <button><Link to={routes.EDIT_PROFILE}>Edit Profile</Link></button>
        <SignOutButton />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
