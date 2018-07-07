/*
  UPDATE: Now supporting redux calls
  right testing out how profile data is
  being stored.

*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

  componentDidMount() {
    console.log(this.props.profileData);
  }

  render() {
    return(
      <div>
        <h1>Profile</h1>
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
