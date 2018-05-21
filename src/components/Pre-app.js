import React,{ Component } from 'react';

class MiniSignUp extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" name="Name" id="name" />
        <label htmlFor="email">Email: </label>
        <input type="text" name="Email" id="email" />
        <button>Submit</button>
      </form>
    )
  }
};

export default MiniSignUp;
