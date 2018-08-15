/*
  This container file will be our CRM holder
  more components will be added as we go along.

  Currently this file is in testing for user
  protected routes. Will update comments once
  testing is complete.
*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../components/SignOut';
import { connect } from 'react-redux';
import * as routes from '../constants/routes';

class Crm extends Component {

  render() {
    const { products, match } = this.props;
    return (
      <div>
        <h1>Welcome to our Crm</h1>
        <Link to={routes.PROFILE}>Profile</Link>
        <SignOutButton />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Crm);
