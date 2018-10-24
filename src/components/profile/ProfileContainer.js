/*
UPDATE: Now supporting redux calls
right testing out how profile data is
being stored.

*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditProfile from './subcomponents/Edit';
import { loadRecentOrderData } from '../../actions/orderData';
import { loadProfileData, newProfileData, newProfileDataToSend, newEmailToSendAuth, newPasswordToSendAuth, deleteUser } from '../../actions/profileData';

class ProfileContainer extends Component {

  componentDidMount() {
    const { getProfileData, auth } = this.props;
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
    const { rest } = this.props
    return (
      <EditProfile 
        {...this.props} 
        {...rest} 
        changed={this.handleChange} 
        newEmail={this.handleNewEmailSubmit}
        newPassword={this.handleNewPasswordSubmit}
        submit={this.handleSubmit}
        deleteAcct={this.handleDelete}
      /> 
    )
  }
}

const mapStateToProps = state => {
  const orderData = state.loadStoredOrderData.data;
  return {
    profileData: state.storeProfileData,
    newProfileData: state.storeNewProfileData,
    recentOrders: orderData.length !== 0 ? orderData : orderData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRecentOrders: orderId => dispatch(loadRecentOrderData(orderId)),
    getProfileData: (userId) => dispatch(loadProfileData(userId)),
    editProfile: (dbDataName, dbDataValue) => dispatch(newProfileData(dbDataName, dbDataValue)),
    sendNewProfileData: (defaultDbData, newDbData, dbID, history) => dispatch(newProfileDataToSend(defaultDbData, newDbData, dbID, history)),
    sendNewEmail: (newEmail, history) => dispatch(newEmailToSendAuth(newEmail, history)),
    sendNewPassword: (newPassword, history) => dispatch(newPasswordToSendAuth(newPassword, history)),
    deletingUser: (moltId, fbId, history) => dispatch(deleteUser(moltId, fbId, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
