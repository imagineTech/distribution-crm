import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Crm from './CRM';
import Landing from '../components/Landing';
import Profile from '../components/Profile';
import * as routes from '../constants/routes';

class App extends Component {
  render() {
    return (
        <div>
          <Route
            exact path={routes.CRM}
            component={() => <Crm />}
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
