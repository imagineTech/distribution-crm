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
import firebase from 'firebase/app';

const DB = db.collection('Buyer')

export const addingUser = (dbData, authId, moltinId) => {
  return DB.doc(authId).set({
    id: authId,
    First_Name: dbData.First_Name,
    Last_Name: dbData.Last_Name,
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
  let defaultDbNames = Object.keys(defaultDbData);
  let newDbNames = Object.keys(newDbData);
  return new Promise((res) => {
    defaultDbNames.map(defaultName => {
      return newDbNames.map(newName => {
        if (defaultName === newName) {
          res(DB.doc(dbID).update({
            [defaultName]: newDbData[newName]
          }))
        }
      })
    })
  }) 
}

export const addOrdersToUser = (userId, orderId) => {
  return DB.doc(userId).update({
    Orders: firebase.firestore.FieldValue.arrayUnion(orderId)
  })
}

