import React from 'react';
import Wave from 'react-wavify';

const CustomWave = ({ color }) => {

    return (
        <Wave fill={color} options={{ amplitude: 20, speed: 0.3 }} />
    );
};

export default CustomWave;