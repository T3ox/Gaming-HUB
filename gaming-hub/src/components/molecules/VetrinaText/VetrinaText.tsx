import React from 'react';
import "./styles.scss";
import { Props } from "./types";

const VetrinaTextContainer: React.FC<Props> = ({text, description}) => {
    return (
        <div className='vetrina-container'>
            <h2 className='py-2'>{text}</h2>
            <p>{description}</p>
        </div>
    );
};

export default VetrinaTextContainer;
