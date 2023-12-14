import React from 'react';
import Banner from "../organisms/Banner/Banner";
import Vetrina from "../organisms/Vetrina/Vetrina";
import {VetrinaContent} from "../../VetrinaContent";
import Review from "../organisms/Review/Review";

const Home = () => {
    return (
        <div>
            <Banner />
            <Vetrina data={VetrinaContent.menu}/>
            <Vetrina data={VetrinaContent.LAN}/>
            <Review />
        </div>
    );
};

export default Home;