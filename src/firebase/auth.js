/*
  For firebase, we are exporting the pre-defined
  auth method calls to our own functions
  So far we only have these for:
    - creating a user with email and password
    - logging in a user with email and password
    - sigining out a user
*/

import { auth } from './config_firebase';

export const doCreateUserWithEmailAndPassword = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export const doLoginWithEmailAndPassword = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
}

export const doSignOut = () => {
  return auth.signOut();
}

export const doUpdateUserEmail = (email) => {
  return auth.currentUser.updateEmail(email)
}

export const doUpdateUserPassword = (password) => {
  return auth.currentUser.updatePassword(password);
}

export const passwordReset = email => {
  return auth.currentUser.sendPasswordResetEmail(email);
}

export const deleteAuth = () => {
  return auth.currentUser.delete();
}
