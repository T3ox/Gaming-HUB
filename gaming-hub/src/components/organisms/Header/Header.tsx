import Navbar from "../Navbar/Navbar";
//import NavbarOlder from "../Navbar/NavbarOlder";
import "./styles.scss";
import { Props } from "./types";

//TODO: FIX THIS SHIT PLEASE

const Header: React.FC<Props> = ({ height, image }) => {
    return (
        <>
            <div
                className="aboutus-header d-flex"
                style={{
                    height: `${height}`,
                    backgroundImage: `url("${image}")`,
                }}
            >
                <Navbar />
            </div>
        </>
    );
};

export default Header;
