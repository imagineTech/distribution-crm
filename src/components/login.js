import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

  handleChange = e => {}

  handleSubmit = e => {}

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="login_email">Email: </label>
            <input type="text" name="login_email" id="login_email" onChange={this.handleChange}/>
          <label htmlFor="login_password">Password: </label>
            <input type="password" id="login_password" name="login_password" onChange={this.handleChange} />
          <button>Login</button>
        </form>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
