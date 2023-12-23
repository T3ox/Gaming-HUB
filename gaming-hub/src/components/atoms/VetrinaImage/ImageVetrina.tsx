import React from 'react';
import {Link} from "react-router-dom";
import Props from "./types";

const ImageVetrina: React.FC<Props> = ({ href, imgSrc, alt }) => {
    return (
        <div className="img-container flex-container justify-center align-center">
            <Link to={href}>
                <img src={imgSrc} alt={alt} />
            </Link>
        </div>
    )
}

export default ImageVetrina;