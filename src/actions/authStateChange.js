import { firebase } from '../firebase/index';

export function authStateData(user) {
  return {
    type: "AUTH_STATE_DATA",
    user
  }
}

export function detectedAuthStateChange() {
  return dispatch => {
    firebase.auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(authStateData(user));
      }
    })
  }
}
