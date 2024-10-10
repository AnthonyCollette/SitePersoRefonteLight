import React from 'react';
import design from '../assets/images/Add color-bro.svg';
import development from '../assets/images/service2.webp';
import Blob from './Blob';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section className='services'>
            <div className='container'>
                <motion.h2 initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1}}>Services</motion.h2>
                <motion.p initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1}}>En tant que graphiste et développeur freelance, je propose une gamme de services pour répondre à vos besoins créatifs et techniques. Que vous recherchiez un design graphique percutant ou une solution de développement web sur mesure, je suis là pour vous aider à concrétiser vos idées.</motion.p>
                <div className='imgwithtext'>
                    <Blob duration={3000}/>
                    <div className='text-column'>
                        <motion.h3 initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 1}}>Design graphique</motion.h3>
                        <ul>
                            <motion.li initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>Création de logos et d'identités visuelles uniques</motion.li>
                            <motion.li initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>Conception de supports de communication (brochures, flyers, cartes de visite, etc.)</motion.li>
                            <motion.li initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>Réalisation d'illustrations et d'infographies personnalisées</motion.li>
                            <motion.li initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>Développement de maquettes et de prototypes pour vos projets</motion.li>
                        </ul>
                    </div>
                    <motion.img loading='lazy' initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1}} src={design} alt="Designer assis à son bureau" />
                </div>
                <div className='imgwithtext reverse'>
                    <Blob duration={5000}/>
                    <div className='text-column'>
                        <motion.h3 initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 1}}>Développement web</motion.h3>
                        <ul>
                            <motion.li initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>Conception et développement de sites web responsives et optimisés pour tous les appareils</motion.li>
                            <motion.li initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>Intégration de fonctionnalités avancées telles que les formulaires de contact, les galeries d'images, etc.</motion.li>
                            <motion.li initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>Personnalisation de thèmes et de templates pour les plateformes CMS (WordPress, Shopify, etc.)</motion.li>
                            <motion.li initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>Optimisation SEO pour améliorer la visibilité de votre site sur les moteurs de recherche</motion.li>
                        </ul>
                    </div>
                    <motion.img loading='lazy' initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1}} src={development} alt="Designer assis à son bureau" />
                </div>
            </div>
        </section>
    );
};

export default Services;