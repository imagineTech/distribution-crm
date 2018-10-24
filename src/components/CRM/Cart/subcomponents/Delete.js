import React from 'react';

const DeleteCart = ({ deleteCrt, profileData }) => {
    return (
        <button onClick={() => {
            deleteCrt(profileData.id)
            window.location.reload();
        }}>Delete Cart</button>
    )
}

export default DeleteCart;