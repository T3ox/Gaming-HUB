import React from 'react';
import Props from "./types";

const TitleVetrina: React.FC<Props> = ({text}) => {
    return <>
        <h2 style={{margin: "0"}}>{text}</h2>
    </>
};

export default TitleVetrina;