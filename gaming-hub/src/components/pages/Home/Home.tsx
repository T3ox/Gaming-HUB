import Banner from "../../organisms/Header/Header";
import Vetrina from "../../organisms/Vetrina/Vetrina";
import React from "react";
import Review from "../../organisms/Review/Review";
import { VetrinaContent } from "../../../utils";

const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
};

const Home = () => {
    return (
        <div style={styles}>
            <Banner />
            <Vetrina
                type={VetrinaContent.menu.type}
                text={VetrinaContent.menu.text}
                description={VetrinaContent.menu.description}
                image={VetrinaContent.menu.image}
            />
            <Vetrina
                type={VetrinaContent.LAN.type}
                text={VetrinaContent.LAN.text}
                description={VetrinaContent.LAN.description}
                image={VetrinaContent.LAN.image}
            />
            <Review />
        </div>
    );
};

export default Home;
