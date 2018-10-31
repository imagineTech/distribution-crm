import { storage } from '../firebase'
import NProgress from 'nprogress';

const imageUploadBegin = () => {
    return {
        type: "IMAGE_UPLOAD_BEGIN",
        message: "Starting image reteval"
    };
};

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

export const imageUpload = (userId, imageFile) => {
    return dispatch => {
        storage.uploadImage(userId, imageFile).then(snap => {
            NProgress.done();
            dispatch(imageUploadSuccess())
        }).catch(err => dispatch(imageUploadError(err)))
    }
}
