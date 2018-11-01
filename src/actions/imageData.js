import { storage } from '../firebase'
import NProgress from 'nprogress';

const imageUploadSuccess = () => {
    return {
        type: "IMAGE_UPLOAD_SUCCESS",
        message: "Image uploaded, successfully :)"
    };
};

const imageUploadError = err => {
    return {
        type: "IMAGE_UPLOAD_ERR",
        message: "Uh-oh something happened...",
        err
    };
};

const downloadImageSucces = () => {
    return {
        type: "DOWNLOAD_IMAGE_SUCCESS",
        message: "Downloaded Image :)"
    }
}

const downloadImageError = err => {
    return {
        type: "DOWNLOAD_IMAGE_ERR",
        message: "Oh-no something happened while download...",
        err
    }
}

export const imageUpload = (userId, imageFile) => {
    return dispatch => {
        storage.uploadImage(userId, imageFile).then(snap => {
            NProgress.done();
            dispatch(imageUploadSuccess())
        }).catch(err => dispatch(imageUploadError(err)))
    };
};

export const downloadImage = userId => {
    return dispatch => {
        storage.downloadImage(userId)
    }
}
