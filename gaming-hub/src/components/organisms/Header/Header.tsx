import Navbar from "../Navbar/Navbar";
import "./styles.scss";

const bannerURL: string = require("../../../images/hub_esterno_hq.jpeg");

const Header = () => {
    return (
        <div className="Header d-flex">
            <Navbar />
            <img src={bannerURL} alt="banner" className="banner-img" />
            {/*<div>
            <NavbarLinksList/>
            </div>
            */}
        </div>
    );
};

export default Header;
