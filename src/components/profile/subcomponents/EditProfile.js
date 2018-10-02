import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newProfileData, newProfileDataToSend, newEmailToSendAuth } from '../../../actions/profileData';

//A component thats going to handle edit
//profile details. Right now its just name
//and email.
class EditPofile extends Component {

  handleChange = e => {
    this.props.editProfile(e.target.name, e.target.value);
  }

  handleEmailChange = e => {
    const { newProfileData, sendNewEmail } = this.props;
    e.preventDefault();
    sendNewEmail(newProfileData.Email);
  }

  handleSubmit = e => {
    const { profileData,newProfileData } = this.props;
    e.preventDefault();
    // Here is where we use the default and new dbData
    this.props.sendNewProfileData(profileData, newProfileData, profileData.id);
  }

  render() {
    const { profileData } = this.props;
    return(
      <section>
        <form onSubmit={(e) => {
            this.handleSubmit(e);
            this.handleEmailChange(e);
          }}>
          <label>Name:
          <input
            name="Name"
            placeholder={`${profileData.First_Name} ${profileData.Last_Name}`}
            onChange={this.handleChange}
          />
          </label>
          <label>Email: 
          <input
            name="Email"
            placeholder={profileData.Email}
            onChange={this.handleChange}
          />
          </label>
          <label>New Password:
          <input
            name="Password"
            placeholder={profileData.Password}
            onChange={this.handleChange}
          />
          </label>
          <label>Confirm Password:
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
    sendNewEmail: (newEmail) => dispatch(newEmailToSendAuth(newEmail))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPofile);
