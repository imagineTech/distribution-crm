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
