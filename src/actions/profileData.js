/*
  Simple action for storing data from signup into a profile state
  Will have to use this in the signup and logiin components for
  the data to pull correctly
*/

import { auth, db, firebase } from '../firebase/index';
import { push } from 'connected-react-router';
import * as routes from '../constants/routes';

export function profileData(data) {
  return {
    type: "PROFILE_DATA",
    data
  }
}

export function loadProfileData(userId) {
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
export function newProfileData(dbDataName, dbDataValue) {
  return {
    type: "NEW_PROFILE_DATA",
    data: {
      [dbDataName]: dbDataValue
    }
  }
}


/*
  This is how i would send it to fb to update, and the result
  would be to redirect the user back to the profile.
*/
export function newProfileDataToSend(defaultDbData, newDbData, dbID) {
  return dispatch => {
    db.editUserData(defaultDbData, newDbData, dbID).then(() => {
      dispatch(push(routes.PROFILE))
    })
  }
}

export function newEmailToSendAuth(newEmail) {
  return dispatch => {
    auth.doUpdateUserEmail(newEmail).then(() => {
      dispatch(push(routes.PROFILE))
    })
  }
}

export function newPasswordToSendAuth(newPassword) {
  return dispatch => {
    auth.doUpdateUserPassword(newPassword).then(() => {
      dispatch(push(routes.PROFILE))
    })
  }
}
