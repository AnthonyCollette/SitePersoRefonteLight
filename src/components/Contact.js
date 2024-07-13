import React from 'react';
import image from '../assets/images/mailbox.png';
import CustomWave from './CustomWave';
import Form from './Form';
import { motion } from 'framer-motion'

const Contact = () => {

    return (
        <section className='contact'>
            <CustomWave color="#fff" />
            <div className='container'>
            <motion.h2 initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1}}>Me contacter</motion.h2>
            <motion.p initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1}}>Besoin d'un coup de pouce pour votre projet ? En tant que graphiste et développeur freelance, je suis là pour vous aider à concrétiser vos idées. Utilisez le formulaire ci-dessous pour me faire signe, et je vous répondrai au plus vite.</motion.p>
            <div className='contact-row'>
                <motion.img initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}} src={image} alt="Boite aux lettres avec courrier entrant et sortant" />
                <Form />
            </div>
            </div>
        </section>
    );
};

export default Contact;