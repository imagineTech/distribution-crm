/*
  Just like the auth file, we're placing the pre-defined
  fb methods into our own functions.

  The one(s) that we have are:
   - creating a new user through firestore on the
     'Buyer' table'
   - loading user profile data for later use
   - editing profile data
*/

import { db } from './config_firebase';

const DB = db.collection('Buyer')

export const addingUser = (dbData, authId, moltinId) => {
  return DB.doc(authId).set({
    id: authId,
    Name: dbData.Name,
    Email: dbData.Email,
    Password: dbData.Password,
    Company: dbData.Company,
    Department: dbData.Department,
    Country: dbData.Country,
    Moltin_User_Id: moltinId
  })
}

export const loadUserProfileData = (docID) => {
  return DB.doc(docID).get();
}

export const editUserData = (defaultDbData, newDbData, dbID) => {
  return DB.doc(dbID).update({
    // These lines won't work, seems that the dynmaic object key calling
    // wont work with fb for more than one entry. Any other entry would just
    // have the same value as the first one.
    // [Object.keys(newDbData)[0]]: (newDbData.Name || defaultDbData.Name),
    // [Object.keys(newDbData)[1]]: (newDbData.Email || defaultDbData.Email)
    // The conditional statements are for when a user only needs to update one
    // value instead of all. That's why i ask for default and new dbData
    // I ended up hard coding them, below:
    Name: (newDbData.Name || defaultDbData.Name),
    Email: (newDbData.Email || defaultDbData.Email)
  })
}
