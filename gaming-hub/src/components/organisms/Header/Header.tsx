import Navbar from "../Navbar/Navbar";
import "./styles.scss";
import { Props } from "./types";

interface CustomCSSProperties extends React.CSSProperties {
    "--height"?: string;
    "--heightLg"?: string;
}

const Header: React.FC<Props> = ({ height, heightLg, image }) => {
    const customStyles: CustomCSSProperties = {
        "--height": height,
        "--heightLg": heightLg,
    };

    return (
        <div className="header" style={customStyles}>
            <Navbar />
            <img src={image} alt="banner" className="banner-img" />
        </div>
    );
};

export default Header;
