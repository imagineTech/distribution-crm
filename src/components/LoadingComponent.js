import React from 'react';

const LoadingComponent = ({ error, timedOut, retry, pastDelay}) => {
    if (error) {
        // When the loader has errored
        return <div>Error! <button onClick={retry}>Retry</button></div>;
    } else if (timedOut) {
        // When the loader has taken longer than the timeout
        return <div>Taking a long time... <button onClick={retry}>Retry</button></div>;
    } else if (pastDelay) {
        // When the loader has taken longer than the delay
        return <div>Loading...</div>;
    } else {
        // When the loader has just started
        return null;
    }
}

export default LoadingComponent;