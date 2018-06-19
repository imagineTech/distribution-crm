import { auth } from './config_firebase';

export const doCreateUserWithEmailAndPassword = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
}
