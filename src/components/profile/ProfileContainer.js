/*
UPDATE: Now supporting redux calls
right testing out how profile data is
being stored.

*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditProfile from './subcomponents/Edit';
import { loadProfileData, newProfileData, newProfileDataToSend, newEmailToSendAuth, newPasswordToSendAuth, deleteUser } from '../../actions/profileData';
import PropTypes from 'prop-types';

class ProfileContainer extends Component {

  componentDidMount() {
    const { getProfileData ,auth } = this.props;
    getProfileData(auth.uid);
  }

  handleChange = e => {
    const { editProfile } = this.props;
    const { name, value } = e.target;
    editProfile(name, value);
  }

  handleNewEmailSubmit = e => {
    const { newProfileData, sendNewEmail, history } = this.props;
    e.preventDefault();
    sendNewEmail(newProfileData.Email, history);
  }

  handleNewPasswordSubmit = e => {
    const { profileData, newProfileData, sendNewPassword, sendNewProfileData, history } = this.props;
    e.preventDefault();
    if (newProfileData.New_Password === newProfileData.Confirm_Password) {
      return (sendNewPassword(newProfileData.New_Password, history),
      sendNewProfileData(profileData, newProfileData, profileData.id, history))
    } else {
      alert('passwords do not match,try again :) ')
    }
  }

  handleSubmit = e => {
    const { profileData, newProfileData, sendNewProfileData, history } = this.props;
    e.preventDefault();
    // Here is where we use the default and new dbData
    sendNewProfileData(profileData, newProfileData, profileData.id, history);
  }

  handleDelete = e => {
    const { deletingUser, profileData, history } = this.props;
    deletingUser(profileData.Moltin_User_Id, profileData.id, history)
  }


  render() {
    console.log('PROFILE CONTAINER RENDERED',this.props)
    const { rest } = this.props
    return (
      <div>
        <EditProfile 
          {...this.props} 
          {...rest} 
          changed={this.handleChange} 
          newEmail={this.handleNewEmailSubmit}
          newPassword={this.handleNewPasswordSubmit}
          submit={this.handleSubmit}
          deleteAcct={this.handleDelete}
        /> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profileData: state.storeProfileData,
    newProfileData: state.storeNewProfileData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: (userId) => dispatch(loadProfileData(userId)),
    editProfile: (dbDataName, dbDataValue) => dispatch(newProfileData(dbDataName, dbDataValue)),
    sendNewProfileData: (defaultDbData, newDbData, dbID, history) => dispatch(newProfileDataToSend(defaultDbData, newDbData, dbID, history)),
    sendNewEmail: (newEmail, history) => dispatch(newEmailToSendAuth(newEmail, history)),
    sendNewPassword: (newPassword, history) => dispatch(newPasswordToSendAuth(newPassword, history)),
    deletingUser: (moltId, fbId, history) => dispatch(deleteUser(moltId, fbId, history))
  }
}

ProfileContainer.propTypes = {
  getProfileData: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  editProfile: PropTypes.func.isRequired,
  newProfileData: PropTypes.object.isRequired,
  sendNewEmail: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  sendNewPassword: PropTypes.func.isRequired,
  sendNewProfileData: PropTypes.func.isRequired,
  deletingUser: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
