import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="Name" />
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="Email" />
        <label htmlFor="phone">Phone: </label>
        <input type="text" id="phone" name="Phone" />
        <label>Preffered Method Of Contact: </label>
        <label htmlFor="phone">Phone: </label>
          <input type="radio" id="phone" checked={true} />
        <label htmlFor="email">Email: </label>
          <input type="radio" id="email"  />
        <label htmlFor="message">Message: </label>
        <textarea placeholder="Enter a message..." />
        <button>Submit</button>
      </form>
    )
  }
}

export default Contact;
