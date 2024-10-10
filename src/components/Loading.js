import React from 'react';
import loadingGif from '../assets/images/Rolling@1x-1.0s-200px-200px.gif'

const Loading = () => {
    return (
        <div className='loading'>
            <img src={loadingGif} alt="Loading spinner" />
        </div>
    );
};

export default Loading;