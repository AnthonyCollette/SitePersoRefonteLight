import { motion } from 'framer-motion'

const FixedTitleSection = ({title, image, desc, alt}) => {

    return (
        <div className='fixed-title-section'>
            <div className='left-column'>
                <motion.h3 initial={{opacity: 0, x: -50}} whileInView={{opacity: 1, x: 0}} viewport={{once: true}} transition={{duration: 1}}>{title}</motion.h3>
            </div>
            <div className='right-column'>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 1, delay: 0.8}}>{desc}</motion.p>
                <motion.img initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{duration: 1, delay: 1.6}} src={image} alt={alt} />
            </div>
        </div>
    );
};

export default FixedTitleSection;