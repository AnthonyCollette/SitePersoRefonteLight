import React from 'react';
import image from '../assets/images/mailbox.png';
import CustomWave from './CustomWave';

const Contact = () => {
    return (
        <section className='contact'>
            <CustomWave color="#fff" />
            <div className='container'>
            <h2>me contacter</h2>
            <p>Besoin d'un coup de pouce pour votre projet ? En tant que graphiste et développeur freelance, je suis là pour vous aider à concrétiser vos idées. Utilisez le formulaire ci-dessous pour me faire signe, et je vous répondrai au plus vite.</p>
            <div className='contact-row'>
                <img src={image} alt="Boite aux lettres avec courrier entrant et sortant" />
                <form>
                    <div className='form-group'>
                        <label>Nom</label>
                        <input type="text" required />
                    </div>
                    <div className='form-group'>
                        <label>Adresse mail</label>
                        <input type="email" required />
                    </div>
                    <div className='form-group'>
                        <label>Message</label>
                        <textarea height="300" required />
                    </div>
                    <div className='form-group'>
                        <input type='checkbox' name="checkbox" id="checkbox" />
                        <label htmlFor='checkbox'>En soumettant ce formulaire, j'accepte que les informations saisies soient transmises par mail à Anthony Collette dans le but d'être recontacté concernant la demande effectuée.</label>
                    </div>
                    <input type='submit' className='btn btn--primary' value="Envoyer" />
                </form>
            </div>
            </div>
        </section>
    );
};

export default Contact;