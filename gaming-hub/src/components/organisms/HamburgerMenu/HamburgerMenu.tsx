import { menu } from "../../../utils/menuDatas";
import HamburgerComponent from "../../molecules/Hamburger/Hamburger";
import "./styles.scss";

const HamburgerMenu = () => {
    return (
        <div className="container menu-container mt-5">
            <div className="row">
                {menu.map((hamburger, index) => (
                    <div
                        className=" col-12 col-sm-6 col-md-4 col-xl-3 hamburger-container"
                        key={index}
                    >
                        <HamburgerComponent
                            name={hamburger.name}
                            description=""
                            img={hamburger.img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HamburgerMenu;
