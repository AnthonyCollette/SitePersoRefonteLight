import React from 'react';
import CustomWave from './CustomWave';

const Header = () => {

    let audio = new Audio("/sounds/click.mp3")

    return (
        <header>
            <div className='container'>
                <h1>graphiste & développeur web</h1>
                <p>Concevoir l’interface, créer l’expérience.</p>
                <a href="#portfolio" className='btn btn--primary' onClick={() => audio.play()}>Découvrir</a>
            </div>

            <CustomWave color="#fff" />
        </header>
    );
};

export default Header;