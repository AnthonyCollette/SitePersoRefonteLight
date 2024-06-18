import React from 'react';
import image1 from '../assets/images/why1.png';
import image2 from '../assets/images/why2.png';
import image3 from '../assets/images/why3.png';
import FixedTitleSection from './FixedTitleSection';

const Whyme = () => {

    const reasons = [{
        title: "vision cohérente de votre projet",
        desc: "En travaillant avec un seul freelance pour la conception graphique et le développement web, vous vous assurez une cohérence visuelle tout au long du processus. De la conception initiale de l'interface utilisateur à l'implémentation technique, je m'assure que chaque aspect de votre site web reflète fidèlement votre marque et votre vision.",
        image: image1,
        alt: "Designer regardant son site web sur son téléphone portable"
    }, {
        title: "communication fluide et efficace",
        desc: "Travailler avec un seul interlocuteur simplifie grandement la communication. Au lieu de jongler entre plusieurs personnes, vous avez un point de contact unique pour discuter de vos idées, donner des retours et résoudre les problèmes éventuels. Cela garantit une collaboration fluide et une compréhension approfondie de vos besoins tout au long du processus de création.",
        image: image2,
        alt: "Designer communicant efficacement avec sa cliente"
    }, {
        title: "flexibilité et agilité",
        desc: "En tant que freelance, je suis capable d'adapter rapidement mes compétences et mes ressources pour répondre à l'évolution de votre projet. Que vous ayez besoin de modifications de conception de dernière minute ou de fonctionnalités supplémentaires sur votre site web, je suis là pour vous accompagner à chaque étape, en vous offrant la flexibilité nécessaire pour faire évoluer votre présence en ligne selon vos besoins changeants.",
        image: image3,
        alt: "Designer ajoutant des fonctionnalités au site web de façon agile lorsque la cliente a de nouvelles idées"
    }]

    return (
        <section className='whyme'>
            <div className='container'>
                <h2>pourquoi moi ?</h2>
                <p>En tant que freelance, je combine les compétences de développeur web et de graphiste pour vous offrir une approche intégrée répondant à l'ensemble de vos besoins en ligne. Voici pourquoi vous pourriez trouver avantageux de faire appel à un professionnel polyvalent comme moi :</p>
                {reasons.map((reason, index) => {
                    return <FixedTitleSection title={reason.title} image={reason.image} desc={reason.desc} alt={reason.alt} key={index} />
                })}
                <p>En somme, faire appel à un freelance offrant à la fois des compétences en développement web et en conception graphique vous permet de bénéficier d'une approche holistique, d'une communication efficace et d'une flexibilité accrue pour concrétiser votre vision en ligne de manière professionnelle et cohérente.</p>
            </div>
        </section>
    );
};

export default Whyme;