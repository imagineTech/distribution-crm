import React, { Component } from 'react';
import { signOutAuth } from '../actions/signOut';
import { connect } from 'react-redux';

class SignOut extends Component {

  handleSignOut = () => {
    this.props.signOut();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleSignOut}>Sign Out</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOutAuth())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)
