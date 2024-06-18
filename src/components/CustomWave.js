import React from 'react';
import Wave from 'react-wavify';

const CustomWave = ({color}) => {
    return (
        <Wave fill={color} options={{
            amplitude: 50,
            speed: 0.2,
        }} />
    );
};

export default CustomWave;