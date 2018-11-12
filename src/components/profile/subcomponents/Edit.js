import React from 'react';
import DeleteProfile from './Delete';
import PropTypes from 'prop-types';

const EditPofile = ({ newProfileData, changed, newEmail, newPassword, submit, deleteAcct }) => {
  return (
    <section>
      <form onSubmit={(e) => {
        submit(e);
        if (newProfileData.Email !== undefined) {
          newEmail(e);
        }
        if (newProfileData.New_Password !== undefined) {
          newPassword(e);
        }
      }}>
        <label>First Name:
          <input
            type="text"
            name="First_Name"
            onChange={changed}
            required
          />
        </label>
        <label> Last Name:
          <input
            type="text"
            name="Last_Name"
            onChange={changed}
            required
          />
        </label>
        <label>Email:
          <input
            type="email"
            name="Email"
            onChange={changed}
          />
        </label>
        <label>New Password:
          <input
            type="password"
            name="New_Password"
            onChange={changed}
            
          />
        </label>
        <label>Confirm New Password:
          <input
            type="password"
            name="Confirm_Password"
            onChange={changed}
            
          />
          
        </label>
        <label>Company: 
          <input 
            type="text"
            name="Company"
            onChange={changed}
          />
        </label>
        <label>Department:
          <input
            type="text"
            name="Company"
            onChange={changed}
          />
        </label>
        <button>Save</button>
      </form>
      <DeleteProfile clicked={deleteAcct} />
    </section>
  )
} 
    
EditPofile.protoTypes = {
  profileData: PropTypes.shape({
    Company: PropTypes.string.isRequired,
    Country: PropTypes.string.isRequired,
    Department: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    First_Name: PropTypes.string.isRequired,
    Last_Name: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
}

export default EditPofile;

