import Navbar from "../Navbar/Navbar";
import "./styles.scss";

//const bannerURL: string = require("../../../images/hub_esterno_hq.jpeg");

const Header = () => {
    return (
        <div>
            {/*<NavbarLinksList/>*/}
            <Navbar />
            {/*<img src={bannerURL} alt="banner" className="banner-img" />*/}
        </div>
    );
};

export default Header;
