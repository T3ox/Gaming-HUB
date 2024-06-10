import React from "react";
import "./styles.scss";
import { Props } from "./types";

const VetrinaTextContainer: React.FC<Props> = ({ text, description }) => {
    const formattedDescription = description
        .split("\n")
        //.filter((line) => line.trim() !== "")
        .map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));

    return (
        <div className="vetrina-text-container m-2">
            <h2 className="py-2">{text}</h2>
            <span>{formattedDescription}</span>
        </div>
    );
};

export default VetrinaTextContainer;
