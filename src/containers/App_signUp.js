import React, { Component } from 'react';
import SignUp from '../components/Signup';
import Login from '../components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <SignUp />
        <Login />
      </div>
    );
  }
}

export default App;
