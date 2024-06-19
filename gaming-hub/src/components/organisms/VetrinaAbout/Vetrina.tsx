import React from "react";
import { VetrinaContent } from "../../../utils";
import ImageVetrina from "../../atoms/VetrinaImage/VetrinaImage";
import VetrinaText from "../../molecules/VetrinaText/VetrinaText";

const AboutVetrina: React.FC = () => {
    const vetrinaStyle: React.CSSProperties = {
        backgroundColor: "#8AA940",
        padding: "56px 0",
    };

    const containerStyle: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        flexDirection: "row",
    };

    return (
        <div style={containerStyle}>
            <VetrinaText
                text={VetrinaContent.about.text}
                description={VetrinaContent.about.description}
            />
            <ImageVetrina
                imgSrc={VetrinaContent.about.image}
                alt="Menu"
                href="/menu"
            />
        </div>
    );
};

export default AboutVetrina;
