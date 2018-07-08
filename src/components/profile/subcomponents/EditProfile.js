import React, { Component } from 'react';
import { connect } from 'react-redux';

//A component thats going to handle edit
//profile details. Right now its just name
//and email. 
class EditPofile extends Component {

  render() {
    return(
      <section>
        <form>
          <label htmlFor="name">Name: </label>
          <input name="name" id="name" placeholder={this.props.profileData.Name} />
          <label htmlFor="email">Email: </label>
          <input name="email;" id="email" placeholder={this.props.profileData.Email} />
          <button>Save</button>
        </form>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPofile);
