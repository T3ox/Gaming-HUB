import React from 'react';
import NavbarLinksList from '../../molecules/NavbarLinksList/NavbarLinksList';

const BannerImgStyles: React.CSSProperties = {
    position: "relative",
    maxHeight: "100vh",
    top: "-78px",
    width: "100vw",
    filter: "brightness(50%)",
    overflow: "hidden",
}

const Header = () => {
    const bannerURL: string = require("../../../images/hub_esterno_hq.jpeg");
    
    return (
        <div>
            <NavbarLinksList/>
            <img src={bannerURL} alt="banner" style={BannerImgStyles} />
        </div>
    );
}

export default Header;