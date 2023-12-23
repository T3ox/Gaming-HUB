import React from 'react';
import NavbarLinksList from "../../molecules/NavbarLinksList/NavbarLinksList";

const Banner = () => {
    const bannerURL: string = require("../../../images/hub_esterno_hq.jpeg");
    
    return (
        <div>
            <NavbarLinksList/>
            <img src={bannerURL} alt="banner" className="banner" />
        </div>
    );
}

export default Banner;