import { db } from './config_firebase';

export const addingEntry = (dbData) => {
  return db.collection('Buyer').add({
    Name: dbData.Name,
    Email: dbData.Email,
    Password: dbData.Password
  })
}
