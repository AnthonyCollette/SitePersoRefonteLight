import React from 'react';
import Bento from './Bento';
import {motion} from 'framer-motion';

const Portfolio = () => {
    return (
        <section className='portfolio' id="portfolio">
            <div className='container'>
                <motion.h2 initial={{y: 50, opacity: 0}} whileInView={{y: 0, opacity: 1}} exit={{y: 1, opacity: 1}} transition={{duration: 1}} viewport={{once: true}}>projets</motion.h2>
                <Bento />
            </div>
        </section>
    );
};

export default Portfolio;