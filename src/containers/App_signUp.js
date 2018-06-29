import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { detectedAuthStateChange } from '../actions/authStateChange';
import Crm from './CRM';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import * as routes from '../constants/routes';

class App extends Component {

  componentDidMount() {
    this.props.onAuthChange();
  }

  render() {
    return (
        <div>
          <Route
            exact path={routes.CRM}
            component={() => <Crm authUser={this.props.user}/>}
            />
          <Route
            exact path={routes.LANDING}
            component={() => <Landing />}
          />
          <Route
            exact path={routes.PROFILE}
            component={() => <Profile />}
          />
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.authToState
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthChange: () => dispatch(detectedAuthStateChange())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
