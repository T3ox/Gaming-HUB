import Navbar from "../Navbar/Navbar";
import "./styles.scss";
import { Props } from "./types";

const Header: React.FC<Props> = ({ height, image }) => {
    return (
        <div
            className="aboutus-header d-flex"
            style={{ height: `${height}`, backgroundImage: `url("${image}")` }}
        >
            <Navbar />
            {/*<img src={image} alt="banner" className="banner-img" />*/}
        </div>
    );
};

export default Header;
