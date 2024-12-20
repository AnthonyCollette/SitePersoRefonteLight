import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const NotFound = () => {
    return (
        <>
        <Nav />
        <main className='not-found container'>
            <h1>Oups...</h1>
            <p>La page que vous recherchez n'existe pas.</p>
            <p>Retournez à la <a href="/">page d'accueil</a>.</p>
        </main>
        <Footer />
        </>
    );
};

export default NotFound;