import React from "react";
import "./styles.scss";
import { Props } from "./types";

const VetrinaText: React.FC<Props> = ({ text, description }) => {
    return (
        <div className="vetrina-text-container m-2">
            <h2 className="py-2">{text}</h2>
            <span dangerouslySetInnerHTML={{ __html: description }}></span>
        </div>
    );
};

export default VetrinaText;
