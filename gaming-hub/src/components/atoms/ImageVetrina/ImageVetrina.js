import React from 'react';

const ImageVetrina = ({ href, imgSrc, alt }) => {
    return (
        <a href={href}>
            <img src={imgSrc} alt={alt} />
        </a>
    )
}

export default ImageVetrina;