import React, { useState } from 'react';
import CustomWave from './CustomWave';
import { motion } from 'framer-motion';

const Header = () => {

    let audio = new Audio("/sounds/click.mp3")

    return (
        <header>
            <div className='container'>
                <motion.h1 initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: 1, opacity: 1}} transition={{duration: 1}}>Graphiste & développeur web</motion.h1>
                <motion.p initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: 1, opacity: 1}} transition={{duration: 1, delay: 0.5}}>Concevoir l’<span>interface</span>, créer l’<span>expérience</span>.</motion.p>
                <motion.a initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: 1, opacity: 1}} transition={{duration: 1, delay: 0.5}} href="#portfolio" className='btn btn--secondary' onClick={() => audio.play()}>Découvrir</motion.a>
            </div>

            <CustomWave />
        </header>
    );
};

export default Header;