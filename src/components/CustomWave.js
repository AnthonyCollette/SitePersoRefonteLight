import React from 'react';
import Wave from 'react-wavify';

const CustomWave = () => {

    return (
        <div className='wave'>
            <Wave options={{ amplitude: 20, speed: 0.3 }} />
        </div>
    );
};

export default CustomWave;