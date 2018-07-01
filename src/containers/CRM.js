/*
  This container file will be our CRM holder
  more components will be added as we go along.

  Currently this file is in testing for user
  protected routes. Will update comments once
  testing is complete.
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAuth } from '../actions/signOut';
import * as routes from '../constants/routes';

class Crm extends Component {

  handleSignOut = () => {
    this.props.signOut();
  }

  render() {
    const { authUser } = this.props;
    return (
      <div>
        <h1>Welcome to our Crm</h1>
        <Link to={routes.PROFILE}>Profile</Link>
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
