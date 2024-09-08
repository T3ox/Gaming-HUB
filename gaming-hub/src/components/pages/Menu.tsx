import { useEffect, useState } from "react";
import Dropdown from "../molecules/Dropdown/Dropdown";
import HamburgerMenu from "../organisms/HamburgerMenu/HamburgerMenu";
import NewestOffer from "../organisms/NewestOffer/NewestOffer";
import "./styles.scss";

const Menu = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            style={isLoading ? { maxHeight: "100svh", overflow: "hidden" } : {}}
        >
            {isLoading && (
                <div className="loading-gif d-flex justify-content-center align-items-center">
                    <img
                        src={require("../../images/hambugerBuilding.gif")}
                        alt="loading..."
                    />
                </div>
            )}

            <div style={isLoading ? { opacity: 0 } : { opacity: 1 }}>
                <NewestOffer />
                <div className={`body`}>
                    <HamburgerMenu />
                    <Dropdown />
                </div>
            </div>
        </div>
    );
};

export default Menu;
