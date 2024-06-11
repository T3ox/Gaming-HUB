import Navbar from "../Navbar/Navbar";
import "./styles.scss";
import { Props } from "./types";

//TODO: FIX THIS SHIT PLEASE

const Header: React.FC<Props> = ({ height, heightLg, image }) => {
    return (
        <div className="header d-flex">
            <Navbar />
            <img src={image} alt="banner" className="banner-img" />
        </div>
    );
};

export default Header;
