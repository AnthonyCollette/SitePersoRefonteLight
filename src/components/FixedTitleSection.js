const FixedTitleSection = ({title, image, desc, alt}) => {

    return (
        <div className='fixed-title-section'>
            <div className='left-column'>
                <h3 >{title}</h3>
            </div>
            <div className='right-column'>
                <p>{desc}</p>
                <img src={image} alt={alt} />
            </div>
        </div>
    );
};

export default FixedTitleSection;