import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" id="password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
};

export default Login;
