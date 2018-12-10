import React from 'react';
import DeleteProfile from './Delete';
import PropTypes from 'prop-types';
import './Edit.css';

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
        <div className="form-group">
        <label>First Name:</label>
          <input
            type="text"
            name="First_Name"
            onChange={changed}
            required
          />
        </div>
        <div className="form-group">
        <label> Last Name:</label>
          <input
            type="text"
            name="Last_Name"
            onChange={changed}
            required
          />
        
        </div>
        <div className="form-group">
        <label>Email:</label>
          <input
            type="email"
            name="Email"
            onChange={changed}
          />
        
        </div>
        <div className="form-group">
        <label>New Password:</label>
          <input
            type="password"
            name="New_Password"
            onChange={changed}
            
          />
        
        </div>
        <div className="form-group">
        <label>Confirm New Password:</label>
          <input
            type="password"
            name="Confirm_Password"
            onChange={changed}
            
          />
          
        
        </div>
        <div className="form-group">
        <label>Company: </label>
          <input 
            type="text"
            name="Company"
            onChange={changed}
          />
        
        </div>
        <div className="form-group">
        <label>Department:</label>
          <input
            type="text"
            name="Company"
            onChange={changed}
          />
        
        </div>
        <div className="form-group">
          <button>Save</button>
          <DeleteProfile clicked={deleteAcct} />
        </div>
      </form>
      
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

