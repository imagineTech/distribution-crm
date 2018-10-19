/*
UPDATE: Now supporting redux calls
right testing out how profile data is
being stored.

*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditProfile from './subcomponents/EditProfile';
import { loadProfileData } from '../../actions/profileData';

class ProfileContainer extends Component {

  componentDidMount() {
    const { getProfileData, auth } = this.props;
    getProfileData(auth.uid);
  }

  render() {
    const { rest } = this.props
    return <EditProfile {...this.props} {...rest} /> 
  }
}

const mapStateToProps = state => {
  return {
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: (userId) => dispatch(loadProfileData(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
