import React from "react";
import "./styles.scss";
import Props from "./types";

const VetrinaImage: React.FC<Props> = ({ href, imgSrc, alt }) => {
    return (
        <a
            href={href}
            id="link-menu"
            style={{ cursor: href ? "pointer" : "default" }}
            className="d-flex justify-content-center"
        >
            <img src={imgSrc} alt={alt} id="img-menu" />
        </a>
    );
};

export default VetrinaImage;
