import React from 'react';
import NavbarLinksList from "../../molecules/NavbarLinksList/NavbarLinksList";
import bannerURL from "./hub_esterno_hq.jpeg";

const Banner = () => {

    return (
        <div>
            <NavbarLinksList />
            <img src={bannerURL} alt="banner" className="banner"/>
        </div>
    );
}

export default Banner;