import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Crm from './CRM';
import SignUp from '../components/Signup';
import Login from '../components/Login';
import * as routes from '../constants/routes';

const Landing = () => {
  return (
    <div>
      <SignUp />
      <Login />
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path={routes.LANDING} component={() => <Landing />} />
        <Route exact path={routes.CRM} component={() => <Crm />}  />
      </div>
  )
  }
}

export default App;
