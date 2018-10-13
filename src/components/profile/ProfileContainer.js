/*
UPDATE: Now supporting redux calls
right testing out how profile data is
being stored.

*/
import React, { Component } from 'react';
import asyncComponent from '../../hoc/async';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { loadProfileData } from '../../actions/profileData';
import * as routes from '../../constants/routes';

const AsyncProfile = asyncComponent(() => {
  return import('./subcomponents/Profile');
})

const AsyncEditProfile = asyncComponent(() => {
  return import('./subcomponents/EditProfile');
})

class ProfileContainer extends Component {

  componentDidMount() {
    const { getProfileData, auth } = this.props;
    getProfileData(auth.uid);
  }

  render() {
    const { auth } = this.props
    return(
      <div>
        <Route
          exact
          path={`${this.props.path}`}
          render={rest => <AsyncProfile {...this.props} {...rest} /> }
        />
        <Route
          exact
          path={`${this.props.path}/${routes.EDIT_PROFILE}`}
          render={rest => <AsyncEditProfile {...this.props} {...rest} {...auth} /> }
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfileData: (userId) => dispatch(loadProfileData(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
