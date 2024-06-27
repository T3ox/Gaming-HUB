import "./styles.scss";
import { Props } from "./types";

interface CustomCSSProperties extends React.CSSProperties {
    "--height"?: string;
    "--heightLg"?: string;
}

const Header: React.FC<Props> = ({ height, heightLg, image, content }) => {
    const customStyles: CustomCSSProperties = {
        "--height": height,
        "--heightLg": heightLg,
    };

    return (
        <header className="header" style={customStyles}>
            <img
                src={image}
                alt="banner"
                className="banner-img"
                style={customStyles}
            />
            {content}
        </header>
    );
};

export default Header;
