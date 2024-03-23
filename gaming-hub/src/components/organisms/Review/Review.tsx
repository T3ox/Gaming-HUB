import React from 'react';
import SingleReview from "../../molecules/SingleReview/SingleReview";

const styles: React.CSSProperties = {
    display: "flex",
    backgroundColor: "#8AA940",
    padding: "56px 0",
}
const MyComponent = () => {
    return (
        <div style={styles}>
            <SingleReview />
        </div>
    );
};

export default MyComponent;
