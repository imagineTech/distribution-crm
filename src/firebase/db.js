/*
  Just like the auth file, we're placing the pre-defined
  fb methods into our own functions.

  The one(s) that we have are:
   - creating a new user through firestore on the
     'Buyer' table
*/

import { db } from './config_firebase';

export const addingEntry = (dbData) => {
  return db.collection('Buyer').add({
    Name: dbData.Name,
    Email: dbData.Email,
    Password: dbData.Password
  })
}

export const getUserData = () => {
  return db.collection('Buyer').get();
}
