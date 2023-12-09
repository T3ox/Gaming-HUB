import React from 'react';
import NavbarLinksList from "../../molecules/NavbarLinksList/NavbarLinksList";
import bannerURL from "./hub_esterno_hq.jpeg";

const Banner = () => {

    return (
        <div>
            <NavbarLinksList navbarClass="navbar"/>
            <img src={bannerURL} alt="banner" className="banner" />
        </div>
    );
}

export default Banner;