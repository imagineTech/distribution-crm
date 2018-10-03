import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newProfileData, newProfileDataToSend, newEmailToSendAuth, newPasswordToSendAuth } from '../../../actions/profileData';

//A component thats going to handle edit
//profile details. Right now its just name
//and email.
class EditPofile extends Component {

  handleChange = e => {
    const { editProfile } = this.props;
    const { name, value } = e.target;
    editProfile(name, value);
  }

  handleNewEmailSubmit = e => {
    const { newProfileData, sendNewEmail } = this.props;
    e.preventDefault();
    sendNewEmail(newProfileData.Email);
  }

  handleNewPasswordSubmit = e => {
    const { newProfileData, sendNewPassword } = this.props;
    e.preventDefault();
    newProfileData.New_Password === newProfileData.Confirm_Password ?
      sendNewPassword(newProfileData.New_Password)
      :
      alert('passwords do not match,try again :) ')
  }

  handleSubmit = e => {
    const { profileData,newProfileData, sendNewProfileData } = this.props;
    e.preventDefault();
    // Here is where we use the default and new dbData
    sendNewProfileData(profileData, newProfileData, profileData.id);
  }

  render() {
    const { profileData, newProfileData } = this.props;
    return(
      <section>
        <form onSubmit={(e) => {
            this.handleSubmit(e);
          }}>
          <label>First Name:
          <input
            name="First_Name"
            onChange={this.handleChange}
          />
          </label>
          <label> Last Name:
          <input
            name="Last_Name"
            onChange={this.handleChange}
          />
          </label>
          <label>Email:
          <input
            name="Email"
            onChange={this.handleChange}
          />
          </label>
          <label>New Password:
          <input
            name="New_Password"
            onChange={this.handleChange}
          />
          </label>
          <label>Confirm New Password:
          <input
            name="Confirm_Password"
            onChange={this.handleChange}
          />
          </label>
          <button>Save</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    // This profileData is the same
    // as the one when created in SignUp
    profileData: state.storeProfileData,
    newProfileData: state.storeNewProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //This is for storing new profile data and then sending it.
    editProfile: (dbDataName, dbDataValue) => dispatch(newProfileData(dbDataName, dbDataValue)),
    sendNewProfileData: (defaultDbData, newDbData, dbID) => dispatch(newProfileDataToSend(defaultDbData, newDbData, dbID)),
    sendNewEmail: (newEmail) => dispatch(newEmailToSendAuth(newEmail)),
    sendNewPassword: (newPassword) => dispatch(newPasswordToSendAuth(newPassword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPofile);
