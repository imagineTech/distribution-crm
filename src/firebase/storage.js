import { storage } from './config_firebase';
import NProgress from 'nprogress';

export const uploadImage = (userId, imgFile) => {
    NProgress.start();
    return storage.child('imgs/' + userId).put(imgFile)
}

export const downloadImage = userId => {
    return storage.ref().child('imgs/' + userId).getDownloadURL()
}