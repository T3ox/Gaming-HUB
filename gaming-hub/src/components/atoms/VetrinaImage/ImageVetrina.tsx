import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Props from "./types";

const VetrinaImage: React.FC<Props> = ({ href, imgSrc, alt }) => {
    return (
        <div className="img-container">
            <Link to={href}>
                <img src={imgSrc} alt={alt} className="img-menu" />
            </Link>
        </div>
    );
};

export default VetrinaImage;
