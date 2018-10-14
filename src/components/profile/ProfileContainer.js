/*
UPDATE: Now supporting redux calls
right testing out how profile data is
being stored.

*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import EditProfile from './subcomponents/EditProfile';
import { loadProfileData } from '../../actions/profileData';
import * as routes from '../../constants/routes';

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
          path={`${this.props.path}/${routes.EDIT_PROFILE}`}
          render={rest => <EditProfile {...this.props} {...rest} {...auth} /> }
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
