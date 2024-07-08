import React from 'react';
import image from '../assets/images/mailbox.png';
import CustomWave from './CustomWave';
import Form from './Form';

const Contact = () => {

    return (
        <section className='contact'>
            <CustomWave color="#fff" />
            <div className='container'>
            <h2>me contacter</h2>
            <p>Besoin d'un coup de pouce pour votre projet ? En tant que graphiste et développeur freelance, je suis là pour vous aider à concrétiser vos idées. Utilisez le formulaire ci-dessous pour me faire signe, et je vous répondrai au plus vite.</p>
            <div className='contact-row'>
                <img src={image} alt="Boite aux lettres avec courrier entrant et sortant" />
                <Form />
            </div>
            </div>
        </section>
    );
};

export default Contact;