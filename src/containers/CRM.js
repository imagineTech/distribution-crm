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
        {
          authUser ?
          <AuthSection /> :
          <NonAuthSection />
        }

    </div>
    );
  };
}

const AuthSection = () => {
  return (
    <section>
      <h1>Welcome to our Crm</h1>
      <Link to={routes.PROFILE}>Profile</Link>
      <button onClick={this.handleSignOut}>Sign Out</button>
    </section>
  );
}

const NonAuthSection = () => {
  return <p>Nah son, login</p>
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
