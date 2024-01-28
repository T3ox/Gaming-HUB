import React from 'react';
import NavbarLinksList from '../../molecules/NavbarLinksList/NavbarLinksList';

const BannerImgStyles: React.CSSProperties = {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    filter: "brightness(50%)",
}

const Header = () => {
    const bannerURL: string = require("../../../images/hub_esterno_hq.jpeg");
    return (
        <div>
            <NavbarLinksList/>
            <img src={bannerURL} alt="banner" style={BannerImgStyles}/>
        </div>
    );
}

export default Header;