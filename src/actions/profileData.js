/*
  Simple action for storing data from signup into a profile state
  Will have to use this in the signup and logiin components for
  the data to pull correctly
*/

import { auth, db, firebase } from '../firebase/';
import { errorHandling } from './loginAuth';
import * as Moltin from '../moltin'
import * as routes from '../constants/routes';

export const profileData = (data) => {
  return {
    type: "PROFILE_DATA",
    data
  }
}

export const loadProfileData = (userId) => {
  return dispatch => {
    firebase.auth.onAuthStateChanged(authUser => {
      if(authUser) {
        db.loadUserProfileData(authUser.uid).then(doc => {
          dispatch(profileData(doc.data()));
        });
      }
    })
  }
}
/*
  I had to first seperate the old from new profile data since
  i was using forms, i needed a way to control the vaules of
  the edit profile form
*/
export const newProfileData = (dbDataName, dbDataValue) => {
  return {
    type: "NEW_PROFILE_DATA",
    data: {
      [dbDataName]: dbDataValue
    }
  }
}

export const passwordResetSuccess = () => {
  return {
    type: "PASSWORD_RESET_EMAIL_SENT_SUCCESS",
    message: "A Password reset email was sent :) ",
    display: false
  }
}


/*
  This is how i would send it to fb to update, and the result
  would be to redirect the user back to the profile.
*/
export const newProfileDataToSend = (defaultDbData, newDbData, dbID, history) => {
  return dispatch => {
    db.editUserData(defaultDbData, newDbData, dbID).then(() => {
      let moltinFirst = (defaultDbData.First_Name || newDbData.First_Name);
      let moltinLast = (defaultDbData.Last_Name || newDbData.Last_Name);
      return Moltin.updateMoltinUser(defaultDbData.Moltin_User_Id, 
        moltinFirst, moltinLast, newDbData.Email )
      .then(()=> {
        history.push(routes.MEMBER_PORTAL);
      })
    })
  }
}

export const newEmailToSendAuth = (newEmail, history) => {
  return dispatch => {
    auth.doUpdateUserEmail(newEmail).then(() => {
      history.push(routes.MEMBER_PORTAL)
    })
  }
}

export const newPasswordToSendAuth = (newPassword, history) => {
  return dispatch => {
    auth.doUpdateUserPassword(newPassword).then(() => {
      history.push(routes.MEMBER_PORTAL)
    })
  }
}

export const sendPasswordResetEmail = email => {
  return dispatch => {
    // auth.passwordReset(email).then(() => {
    //   dispatch(passwordResetSuccess())
    // }).catch(err => dispatch(errorHandling(err.code, err.message)))
    dispatch(passwordResetSuccess())
  }
}

export const deleteUser = (moltId, fbId, history) => {
  return dispatch => {
    Moltin.deleteMoltinUser(moltId)
    auth.deleteAuth()
    db.deleteDocument(fbId).then(() => {
      history.push(routes.HOME)
    })
  }
}
