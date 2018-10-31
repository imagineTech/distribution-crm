import { storage, db } from '../firebase/'

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
        dispatch(imageUploadBegin())
        storage.uploadImage(userId, imageFile).then(snap => {
            dispatch(imageUploadSuccess())
        }).catch(err => dispatch(imageUploadError(err)))
    }
}