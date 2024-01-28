import React from "react";
import { Link } from "react-router-dom";
import Props from "./types";

const styles: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "500px",
    overflow: "hidden",
};

const imgStyle: React.CSSProperties = {
    width: "90%",
    height: "90%",
};
const ImageVetrina: React.FC<Props> = ({ href, imgSrc, alt }) => {
    return (
        <div style={styles}>
            <Link to={href}>
                <img style={imgStyle} src={imgSrc} alt={alt} />
            </Link>
        </div>
    );
};

export default ImageVetrina;
