import React from 'react';

const ErrorLogin = ({ error }) => {
    return (
        <div>
            {error === {} ? null : (
            <section>
                <p>{ error.code }</p>
                <p>{error.message}</p>
            </section>
            )}
        </div>
    )
}

export default ErrorLogin;