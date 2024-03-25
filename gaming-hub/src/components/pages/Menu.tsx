import Dropdown from "../molecules/Dropdown/Dropdown";
import HamburgerMenu from "../organisms/HamburgerMenu/HamburgerMenu";
import Navbar from "../organisms/Navbar/Navbar";
import NewestOffer from "../organisms/NewestOffer/NewestOffer";
import "./styles.scss";

const Menu = () => {
    return (
        <>
            <div className="header">
                <Navbar />
                <NewestOffer />
            </div>
            <div className="body">
                <HamburgerMenu />
                <Dropdown />
            </div>
            <footer></footer>
        </>
    );
};

export default Menu;
