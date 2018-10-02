import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newProfileData, newProfileDataToSend } from '../../../actions/profileData';

//A component thats going to handle edit
//profile details. Right now its just name
//and email.
class EditPofile extends Component {

  handleChange = e => {
    this.props.editProfile(e.target.name, e.target.value);
  }

  handleSubmit = e => {
    e.preventDefault();
    // Here is where we use the default and new dbData
    this.props.sendNewProfileData(this.props.profileData, this.props.newProfileData, this.props.profileData.id);
  }

  render() {
    const { profileData } = this.props;
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            name="Name"
            placeholder={`${profileData.First_Name} ${profileData.Last_Name}`}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email: </label>
          <input
            name="Email"
            placeholder={profileData.Email}
            onChange={this.handleChange}
          />
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
    sendNewProfileData: (defaultDbData, newDbData, dbID) => dispatch(newProfileDataToSend(defaultDbData, newDbData, dbID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPofile);
