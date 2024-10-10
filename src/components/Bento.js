import React, { useEffect, useRef, useState } from 'react';
import hozu from '../assets/images/projects/hozu.webp';
import starsheep from '../assets/images/projects/starsheep.webp';
import idealzen from '../assets/images/projects/idealzen.webp';
import montlhery from '../assets/images/projects/monthlery.webp';
import effetanimal from '../assets/images/projects/effetanimal.webp';
import chat from '../assets/images/projects/chat.webp';
import bibi from '../assets/images/projects/bibi300.webp';
import idealzensite from '../assets/images/projects/idealzensite.webp';
import adaf from '../assets/images/projects/adaf.webp';
import isolabel from '../assets/images/projects/isolabel.webp';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import starsheepBig from '../assets/images/projects/starsheep-big.webp';
import hozuBig from '../assets/images/projects/hozu-big.webp';
import catBig from '../assets/images/projects/cat-big.webp';
import conduiteBig from '../assets/images/projects/conduite-big.webp';
import idealzenBig from '../assets/images/projects/idealzen-big.webp';
import adafBig from '../assets/images/projects/adaf-big.webp';
import bibiBig from '../assets/images/projects/bibig.webp';
import isolabelBig from '../assets/images/projects/isolabel-big.webp';
import effetBig from '../assets/images/projects/effet-big.webp';
import idealBig from '../assets/images/projects/ideal-big.webp';
import { motion } from 'framer-motion';

const Bento = () => {

    const modalRef = useRef()

    const projects = [
        {
            image: starsheep,
            alt: 'Logo Starsheep',
            title: 'Starsheep',
            desc: "Logo réalisé pour une association venant en aide aux enfants malades.",
            tags: ['logo'],
            bigImage: starsheepBig
        }, {
            image: hozu,
            alt: 'Logo Hozu',
            title: 'Hozu',
            desc: "Logo réalisé pour un restaurant japonais.",
            link: "https://www.hozusushi.com/",
            tags: ['logo'],
            bigImage: hozuBig
        }, {
            image: idealzen,
            alt: 'Logo Ideal Zen',
            title: "Ideal Zen",
            desc: "Logo réalisé pour une auto-entreprise de Reiki.",
            link: "https://idealzen.fr/",
            tags: ['logo'],
            bigImage: idealzenBig
        }, {
            image: montlhery,
            alt: 'Livret de code pour Montlhery Conduite',
            title: "Montlhery Conduite",
            desc: "Dépliant commercial pour une auto-école.",
            tags: ['print'],
            bigImage: conduiteBig
        }, {
            image: effetanimal,
            alt: 'Site pour Effet Animal',
            title: "Effet Animal",
            desc: "Site web réalisé pour une association de zoothérapie.",
            link: "https://effetanimal.org/",
            tags: ['logo', 'site web', 'maquette graphique'],
            bigImage: effetBig
        }, {
            image: chat,
            alt: 'Logo pour un streamer',
            title: "Streamer",
            desc: "Logo réalisé pour un streamer sur Twitch",
            tags: ['logo'],
            bigImage: catBig
        }, {
            image: bibi,
            alt: 'Logo de Bibi300',
            title: "Bibi300",
            desc: "Logo réalisé pour le YouTuber & Streamer Bibi300.",
            link: "https://www.youtube.com/@Bibi300",
            tags: ['logo', 'bannière'],
            bigImage: bibiBig
        }, {
            image: adaf,
            alt: 'Logo de Adaf',
            title: "Adaf",
            desc: "Logo réalisé pour une association de défense des animaux familiers.",
            tags: ['logo'],
            bigImage: adafBig
        }, {
            image: isolabel,
            alt: "Logo d'Isolabel",
            title: "Isolabel",
            desc: "Logo réalisé pour une entreprise spécialisée dans l'isolation.",
            tags: ['logo'],
            bigImage: isolabelBig
        }, {
            image: idealzensite,
            alt: "Site d'Ideal Zen",
            title: "Ideal Zen",
            desc: "Site web réalisé pour une auto-entreprise de Reiki",
            link: "https://idealzen.fr/",
            tags: ['logo', 'site web'],
            bigImage: idealBig
        }
    ]

    const [showModal, setShowModal] = useState(false)
    const [project, setProject] = useState()

    useEffect(() => {
        if (project !== undefined && project !== null) {
            setShowModal(true)
        }
    }, [project])

    return (
        <div className='bento'>
            {projects.map((project, index) => { return <motion.article initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}} viewport={{once: true}} key={index} onClick={() => setProject({ image: project?.bigImage, alt: project?.alt, title: project?.title, desc: project?.desc, link: project?.link, tags: project?.tags })}><img loading='lazy' src={project.image} alt={project.alt} /></motion.article> })}
            {createPortal(<CSSTransition in={showModal} timeout={300} nodeRef={modalRef} classNames="modal" unmountOnExit>
                <div className='modal' ref={modalRef} onClick={() => setShowModal(false)}>

                    <div className='overlay' onClick={(e) => { e.stopPropagation() }}>
                        <button className='btn--close' onClick={() => {
                            setProject(null)
                            setShowModal(false)
                        }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></button>
                        <img src={project?.image} alt={project?.alt} loading='lazy' />
                        <div className='content'>
                            <h3>{project?.title}</h3>
                            <ul className='tags'>
                                {project?.tags?.map((tag, index) => {
                                    return <li key={index}>{tag}</li>
                                })}
                            </ul>
                            <p>{project?.desc}</p>
                            {project?.link && <a href={project?.link} target='_blank' className='btn btn--primary'>Voir le site</a>}
                        </div>
                    </div>

                </div></CSSTransition>, document.body)}

        </div>
    );
};

export default Bento;