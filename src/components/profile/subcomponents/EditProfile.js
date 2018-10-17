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
    const { newProfileData, sendNewEmail, history } = this.props;
    e.preventDefault();
    sendNewEmail(newProfileData.Email, history);
  }

  handleNewPasswordSubmit = e => {
    const { profileData, newProfileData, sendNewPassword, sendNewProfileData, history } = this.props;
    e.preventDefault();
    if(newProfileData.New_Password === newProfileData.Confirm_Password) {
      sendNewPassword(newProfileData.New_Password, history),
      sendNewProfileData(profileData, newProfileData, profileData.id, history)
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

  render() {
    const { profileData, newProfileData } = this.props
    return(
      <section>
        <form onSubmit={(e) => {
            this.handleSubmit(e);
            if(newProfileData.Email !== undefined) {
              this.handleNewEmailSubmit(e);
            }
            if (newProfileData.New_Password !== undefined) {
              this.handleNewPasswordSubmit(e);
            }
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
    sendNewProfileData: (defaultDbData, newDbData, dbID, history) => dispatch(newProfileDataToSend(defaultDbData, newDbData, dbID, history)),
    sendNewEmail: (newEmail, history) => dispatch(newEmailToSendAuth(newEmail, history)),
    sendNewPassword: (newPassword, history) => dispatch(newPasswordToSendAuth(newPassword, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPofile);

