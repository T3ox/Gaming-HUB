import React from 'react';
import Banner from "../organisms/Banner/Banner";
import Vetrina from "../organisms/Vetrina/Vetrina";

const Home = () => {
    return (
        <div>
            <Banner />
            <Vetrina type="menu"/>
            <Vetrina type="LAN"/>
        </div>
    );
};

export default Home;