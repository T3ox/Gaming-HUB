import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Props from "./types";

const VetrinaImage: React.FC<Props> = ({ href, imgSrc, alt }) => {
    return (
        <Link
            to={href}
            id="link-menu"
            style={{ cursor: href ? "pointer" : "default" }}
        >
            <img src={imgSrc} alt={alt} id="img-menu" />
        </Link>
    );
};

export default VetrinaImage;
