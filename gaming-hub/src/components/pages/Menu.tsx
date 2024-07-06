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
        <>
            {isLoading && (
                <div className="loading-gif d-flex justify-content-center align-items-center">
                    <img
                        src={require("../../images/hambugerBuilding.gif")}
                        alt="loading..."
                    />
                </div>
            )}
            {!isLoading && (
                <div className="fade-in">
                    <NewestOffer />
                    <div className={`body`}>
                        <HamburgerMenu />
                        <Dropdown />
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
