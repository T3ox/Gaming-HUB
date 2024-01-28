import React from "react";
import ImageVetrina from "../../atoms/VetrinaImage/ImageVetrina";
import Props from "./types";
import VetrinaText from "../../molecules/VetrinaText/VetrinaText";

const Vetrina: React.FC<Props> = ({ type, text, description, image }) => {
    const vetrinaStyle: React.CSSProperties = {
        backgroundColor: type === "menu" ? "#8AA940" : "#7E1DC5",
        padding: "56px 0",
    };

    const containerStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        gap: "50px",
        flexDirection: type === "menu" ? "row" : "row-reverse",
    };

    return (
        <div style={vetrinaStyle}>
            <div style={containerStyle}>
                <VetrinaText text={text} description={description} />
                <ImageVetrina imgSrc={image} alt="Menu" href="/menu" />
            </div>
        </div>
    );
};

export default Vetrina;
