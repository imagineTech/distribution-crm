import { storage } from './config_firebase';

export const uploadImage = (userId, imgFile) => {
    return storage.ref().child('images/' + userId).put(imgFile)
}

export const downloadImage = userId => {
    return storage.ref().child('images/' + userId).getDownloadURL()
}