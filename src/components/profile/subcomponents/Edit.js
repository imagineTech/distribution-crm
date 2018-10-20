import React from 'react';

const EditPofile = ({ newProfileData, changed, newEmail, newPassword, submit }) => {
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
          />
        </label>
        <label> Last Name:
          <input
            name="Last_Name"
            onChange={changed}
          />
        </label>
        <label>Email:
          <input
            name="Email"
            onChange={changed}
          />
        </label>
        <label>New Password:
          <input
            name="New_Password"
            onChange={changed}
          />
        </label>
        <label>Confirm New Password:
          <input
            name="Confirm_Password"
            onChange={changed}
          />
        </label>
        <button>Save</button>
      </form>
    </section>
  )
} 
    

export default EditPofile;

