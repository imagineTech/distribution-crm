/*
UPDATE: Now supporting redux calls
right testing out how profile data is
being stored.

*/
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Profile from './subcomponents/Profile';
import * as routes from '../../constants/routes';

const ProfileContainer = ({ comp: Component, auth, ...rest }) => {
  return(
    <div>
      <Route
        exact
        path={`${rest.path}`}
        render={props => auth.authenticated ? <Profile {...props} {...rest} /> : <p>Access denied</p> }
      />
      <Route
        exact
        path={`${rest.path}/${routes.EDIT_PROFILE}`}
        render={props => auth.authenticated ? <Component {...props} {...rest} {...auth} /> : <p>Access denied</p> }
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    profileData: state.storeProfileData
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
