import React from "react";
import ImageVetrina from "../../atoms/VetrinaImage/ImageVetrina";
import VetrinaText from "../../molecules/VetrinaText/VetrinaText";
import Props from "./types";

const Vetrina: React.FC<Props> = ({ type, text, description, image }) => {
    const vetrinaStyle: React.CSSProperties = {
        backgroundColor: type === "menu" ? "#8AA940" : "#7E1DC5",
        padding: "56px 0",
    };

    const dynamicStyle: React.CSSProperties = {
        flexDirection: type === "menu" ? "row" : "row-reverse",
        backgroundColor: type === "menu" ? "#8AA940" : "#7E1DC5",
        width: "100%",
      };

    return (
        <div style={dynamicStyle} >
            <div className="container" >
                <div className="row">
                    <div className="col-12 col-md-6">
                        <VetrinaText text={text} description={description} />
                    </div>
                    <div className="col-12 col-md-6">
                        <ImageVetrina imgSrc={image} alt="Menu" href="/menu" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vetrina;
