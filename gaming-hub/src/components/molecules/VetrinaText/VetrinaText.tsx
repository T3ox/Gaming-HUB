import React from 'react';
import TitleVetrina from "../../atoms/VetrinaTitle/TitleVetrina";
import DescriptionVetrina from "../../atoms/VetrinaDescription/DescriptionVetrina";
import {Props} from "./types";
import {text} from "stream/consumers";

const textContainerStyle: React.CSSProperties = {
    width: "45%",
    display: "flex",
    flexDirection: "column",
}
const MyComponent: React.FC<Props> = ({text, description}) => {
    return (
        <div style={textContainerStyle}>
            <TitleVetrina text={text}/>
            <DescriptionVetrina description={description}/>
        </div>
    );
};

export default MyComponent;
