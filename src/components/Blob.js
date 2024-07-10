import React from 'react';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';

const Blob = ({duration}) => {

    const blob1 = "M151 -185.4C202 -170.7 254.1 -135.1 262.6 -89.9C271.1 -44.6 235.9 10.3 207.7 58.4C179.6 106.6 158.6 147.9 125.1 198.6C91.7 249.2 45.8 309.1 2.4 305.9C-41.1 302.6 -82.3 236.3 -128.7 189.9C-175.2 143.4 -226.9 117 -259.3 71.5C-291.7 26 -304.7 -38.6 -294.9 -104.3C-285.2 -169.9 -252.8 -236.7 -199.9 -250.7C-146.9 -264.8 -73.5 -226.1 -11.8 -210C50 -193.8 99.9 -200 151 -185.4"

    const blob2 = "M163.2 -238.5C198 -199.5 203.1 -133.6 220.4 -73.3C237.8 -13 267.2 41.7 260.8 92C254.4 142.2 212.2 188 162.7 208.9C113.2 229.9 56.6 225.9 -8.4 237.5C-73.5 249.1 -146.9 276.3 -200.8 256.8C-254.7 237.3 -289 171.2 -309.4 102.1C-329.7 33 -336 -39.1 -300.5 -81.9C-265 -124.7 -187.6 -138.2 -130.5 -170C-73.5 -201.8 -36.7 -251.9 13.8 -270.8C64.3 -289.8 128.5 -277.6 163.2 -238.5"

    const blobAnimation = useSpring({
        from: { x: blob1 },
        to: { x: blob2 },
        config: {
            duration: duration
        },
        loop: { reverse: true }
    })

    return (
        <motion.div viewport={{once: true}} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 2}} className='blob'>
            <svg id="visual" viewBox="0 0 600 600" width="600" height="600" xmlns="http://www.w3.org/2000/svg" version="1.1"><g transform="translate(317.10135584997454 273.85629537269745)"><animated.path d={blobAnimation.x} fill="#FFF3E1"></animated.path></g></svg>
        </motion.div>
    );
};

export default Blob;