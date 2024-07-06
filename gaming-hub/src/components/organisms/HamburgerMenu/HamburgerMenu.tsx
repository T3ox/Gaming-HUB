import { useEffect, useState } from "react";
import { menu } from "../../../utils/LocalDB/menuDatas";
import HamburgerComponent from "../../molecules/HamburgerComponent/HamburgerComponent";
import "./styles.scss";

const HamburgerMenu = () => {
    const [loadedImages, setLoadedImages] = useState(0);

    useEffect(() => {
        menu.forEach((hamburger) => {
            const img = new Image();
            img.src = hamburger.img;
            img.onload = () => {
                setLoadedImages((prevCount) => {
                    return prevCount + 1;
                });
            };
        });
    }, []);

    return (
        <div className="container menu-container mt-5 fade-in">
            <div className="row">
                {menu.map((hamburger, index) => (
                    <div
                        className="col-6 col-md-4 col-xl-3 hamburger-container"
                        key={index}
                    >
                        <HamburgerComponent
                            name={hamburger.name}
                            description={hamburger.description}
                            img={hamburger.img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HamburgerMenu;
