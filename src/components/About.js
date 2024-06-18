import React from 'react';
import image from '../assets/images/Design inspiration-bro.svg';
import CustomWave from '../components/CustomWave';

const About = () => {
    return (
        <section className='about'>
            <CustomWave color="#fff" />
            <div className='container'>
                <img src={image} alt="Designer assis à son bureau" />
                <div className='content'>
                    <h2>qui suis-je ?</h2>
                    <p>Passionné de graphisme depuis plus de 10 ans ainsi que de développement web depuis 4 ans, c’est tout naturellement que j’ai décidé de vous proposer mes services en tant que freelance !
                        Depuis 2017, j’ai eu l’occasion de collaborer avec des entreprises à taille humaine placées sur des secteurs d’activité variés dans le but de les aider à améliorer leur présence en ligne. Aujourd’hui encore, j’ai pour ambition de vous proposer mes services de création de sites internet pour que vous aussi puissiez développer votre marque, activité ou entreprise !
                        Votre satisfaction étant ma priorité, je prends en compte vos idées et vos objectifs jusqu’à créer un site internet sur mesure. Il peut s’agir d’un e-commerce, de la prestation de service, d’une vitrine, ou bien d’un portfolio.</p>
                </div>
            </div>
            <CustomWave color="#fff" />
        </section>
    );
};

export default About;