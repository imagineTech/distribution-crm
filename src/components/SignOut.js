import React, { Component } from 'react';
import { signOutAuth } from '../actions/signOut';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SignOut extends Component {

  handleSignOut = () => {
    const { signOut, history} = this.props;
    signOut(history, window);
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
    signOut: (history, reloadWindow) => dispatch(signOutAuth(history, reloadWindow))
  }
}

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)
