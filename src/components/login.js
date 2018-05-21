import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" />
          <label htmlFor="login_password">Password: </label>
            <input type="password" id="login_password" name="Password" />
          <button>Login</button>
        </form>
      </div>
    )
  }
};

export default Login;
