import { db } from './config_firebase';

export const addingEntry = (dbName, dbData) => {
  return db.collection(dbName).add({
    Name: dbData.Name,
    Email: dbData.Email,
    Password: dbData.Password
  })
}
