import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOutAuth } from '../actions/signOut';

class Crm extends Component {

  handleSignOut = () => {
    this.props.signOut();
  }

  render() {
    return (
      <div>
        <h1>Welcome to our Crm</h1>
        <button onClick={this.handleSignOut}>Sign Out</button>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOutAuth())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Crm);
