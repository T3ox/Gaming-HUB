import React from 'react';
import Props from "./types";

const styles: React.CSSProperties = {
    fontSize: "2.5em"
}

const TitleVetrina: React.FC<Props> = ({text}) => {
    return (
        <h2 style={styles}>{text}</h2>
    );
};

export default TitleVetrina;