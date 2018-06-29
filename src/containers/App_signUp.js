import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Crm from './CRM';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import * as routes from '../constants/routes';
import { firebase } from '../firebase/index';

class App extends Component {

  state = {
    authUser: null
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(user => {
      if(user) {
        this.setState(() => ({ authUser: user }))
      } else {
        this.setState(() => ({ authUser: null }))
      }
    });
  }

  render() {
    return (
        <div>
          <Route
            exact path={routes.CRM}
            component={() => <Crm authUser={this.state.authUser}/>}
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

export default App;
