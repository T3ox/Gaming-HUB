import React from 'react';
import Props from "./types";

const DescriptionVetrina: React.FC<Props> = ({description}) => {
    return (
        <p> {description} </p>
    );
}

export default DescriptionVetrina;