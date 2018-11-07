import React from 'react';
import DeleteProfile from './Delete';

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
            name="First_Name"
            onChange={changed}
            required
          />
        </label>
        <label> Last Name:
          <input
            name="Last_Name"
            onChange={changed}
            required
          />
        </label>
        <label>Email:
          <input
            name="Email"
            onChange={changed}
            type="email"
          />
        </label>
        <label>New Password:
          <input
            name="New_Password"
            onChange={changed}
            type="password"
            
          />
        </label>
        <label>Confirm New Password:
          <input
            name="Confirm_Password"
            onChange={changed}
            type="password"
            
          />
          
        </label>
        <button>Save</button>
      </form>
      <DeleteProfile clicked={deleteAcct} />
    </section>
  )
} 
    

export default EditPofile;

