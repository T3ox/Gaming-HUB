import HamburgerMenu from "../organisms/HamburgerMenu/HamburgerMenu";
import Navbar from "../organisms/Navbar/Navbar";
import NewestOffer from "../organisms/NewestOffer/NewestOffer";
import "./styles.scss";

const Menu = () => {
    return (
        <div className="body">
            <Navbar />
            <NewestOffer />
            <HamburgerMenu />
        </div>
    );
};

export default Menu;
