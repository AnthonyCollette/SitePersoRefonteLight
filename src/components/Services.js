import React from 'react';
import design from '../assets/images/Add color-bro.svg';
import development from '../assets/images/service2.png';
import Blob from './Blob';

const Services = () => {
    return (
        <section className='services'>
            <div className='container'>
                <h2>services</h2>
                <p>En tant que graphiste et développeur freelance, je propose une gamme de services pour répondre à vos besoins créatifs et techniques. Que vous recherchiez un design graphique percutant ou une solution de développement web sur mesure, je suis là pour vous aider à concrétiser vos idées.</p>
                <div className='imgwithtext'>
                    <Blob duration={3000}/>
                    <div className='text-column'>
                        <h3>design graphique</h3>
                        <ul>
                            <li>Création de logos et d'identités visuelles uniques</li>
                            <li>Conception de supports de communication (brochures, flyers, cartes de visite, etc.)</li>
                            <li>Réalisation d'illustrations et d'infographies personnalisées</li>
                            <li>Développement de maquettes et de prototypes pour vos projets</li>
                        </ul>
                    </div>
                    <img src={design} alt="Designer assis à son bureau" />
                </div>
                <div className='imgwithtext reverse'>
                    <Blob duration={5000}/>
                    <div className='text-column'>
                        <h3>développement web</h3>
                        <ul>
                            <li>Conception et développement de sites web responsives et optimisés pour tous les appareils</li>
                            <li>Intégration de fonctionnalités avancées telles que les formulaires de contact, les galeries d'images, etc.</li>
                            <li>Personnalisation de thèmes et de templates pour les plateformes CMS (WordPress, Shopify, etc.)</li>
                            <li>Optimisation SEO pour améliorer la visibilité de votre site sur les moteurs de recherche</li>
                        </ul>
                    </div>
                    <img src={development} alt="Designer assis à son bureau" />
                </div>
            </div>
        </section>
    );
};

export default Services;