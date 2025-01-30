import { useEffect, useState } from "react";
import { menu } from "../../../utils/LocalDB/menuDatas";
import HamburgerComponent from "../../molecules/HamburgerComponent/HamburgerComponent";
import "./styles.scss";

const fastCss = {
    maxWidth: "95%",
};

const HamburgerMenu = () => {
    const [loadedImages, setLoadedImages] = useState(false);

    useEffect(() => {
        const imagePromises = menu.map((hamburger) => {
            return new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.src = hamburger.img;
                img.onload = () => resolve();
                img.onerror = () => reject();
            });
        });

        Promise.all(imagePromises)
            .then(() => {
                setLoadedImages(true); // Tutte le immagini sono state caricate
            })
            .catch(() => {
                console.error("Errore nel caricamento delle immagini.");
            });
    }, []);

    return (
        <div className="container menu-container mt-5 fade-in" style={fastCss}>
            <div className="row">
                {menu.map((hamburger, index) => (
                    <div
                        className="col-6 col-md-4 col-xl-3 hamburger-container d-flex justify-content-center align-items-center p-0"
                        key={index}
                    >
                        <HamburgerComponent
                            name={hamburger.name}
                            description={hamburger.description}
                            img={hamburger.img}
                            prices={hamburger.prices}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HamburgerMenu;
