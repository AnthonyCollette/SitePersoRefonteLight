import React from 'react';
import image from '../assets/images/Design inspiration-bro.svg';
import CustomWave from '../components/CustomWave';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className='about'>
            <CustomWave color="#fff" />
            <div className='container imgwithtext'>
                <motion.img initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 2}} src={image} loading='lazy' alt="Designer assis à son bureau" />
                <div className='content'>
                    <motion.h2 initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1, delay: 0.8}}>Qui suis-je ?</motion.h2>
                    <motion.p initial={{opacity: 0, x: 50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1, delay: 1.2}}>Passionné de graphisme depuis plus de 10 ans ainsi que de développement web depuis 4 ans, c’est tout naturellement que j’ai décidé de vous proposer mes services en tant que freelance !
                        Depuis 2017, j’ai eu l’occasion de collaborer avec des entreprises à taille humaine placées sur des secteurs d’activité variés dans le but de les aider à améliorer leur présence en ligne. Aujourd’hui encore, j’ai pour ambition de vous proposer mes services de création de sites internet pour que vous aussi puissiez développer votre marque, activité ou entreprise !
                        Votre satisfaction étant ma priorité, je prends en compte vos idées et vos objectifs jusqu’à créer un site internet sur mesure. Il peut s’agir d’un e-commerce, de la prestation de service, d’une vitrine, ou bien d’un portfolio.</motion.p>
                </div>
            </div>
            <CustomWave color="#fff" />
        </section>
    );
};

export default About;