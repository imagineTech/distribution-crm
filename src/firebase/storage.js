import { storage } from './config_firebase';

export const uploadImage = (userId, imgFile) => {
    return storage.child('imgs/' + userId).put(imgFile)
}

export const downloadImage = userId => {
    return storage.child('imgs/' + userId).getDownloadURL()
}