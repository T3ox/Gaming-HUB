import Dropdown from "../molecules/Dropdown/Dropdown";
import HamburgerMenu from "../organisms/HamburgerMenu/HamburgerMenu";
import NewestOffer from "../organisms/NewestOffer/NewestOffer";
import "./styles.scss";
const Menu = () => {
    return (
        <>
            <NewestOffer />
            <div className="body">
                <HamburgerMenu />
                <Dropdown />
            </div>
        </>
    );
};

export default Menu;
