import React, { useState } from 'react';
import CustomWave from './CustomWave';

const Header = () => {

    let audio = new Audio("/sounds/click.mp3")

    return (
        <header>
            <div className='container'>
                <h1>Graphiste & développeur web</h1>
                <p>Concevoir l’<span>interface</span>, créer l’<span>expérience</span>.</p>
                <a href="#portfolio" className='btn btn--secondary' onClick={() => audio.play()}>Découvrir</a>
            </div>

            <CustomWave color="#fff" />
        </header>
    );
};

export default Header;