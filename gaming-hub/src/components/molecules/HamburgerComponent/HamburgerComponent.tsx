import { useEffect, useState } from "react";
import Props from "../../../utils/Props";
import "./styles.scss";
const portal = require("../../../images/portal.png") as string;
const portalReverse = require("../../../images/portal_back.png") as string;

const HamburgerComponent: React.FC<Props> = ({ name, description, img }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoadedImages, setIsLoadedImages] = useState(false);

    const toggleIngredient = () => {
        setIsHovered(!isHovered);
    };

    useEffect(() => {
        const image = new Image();
        image.src = img;
        image.onload = () => {
            setIsLoadedImages(true);
        };
    }, [img]);

    return (
        <>
            {isLoadedImages && (
                <div className="panino-container d-flex flex-column align-items-center">
                    <div className="panino-shower">
                        <div className="panino-inner">
                            <div className="card-front">
                                <img src={portal} alt="" id="portal" />

                                <img
                                    src={img}
                                    alt=""
                                    id="hamburger"
                                    className={`${
                                        isHovered ? "ingredients-toggled" : ""
                                    }`}
                                    onMouseEnter={toggleIngredient}
                                    onMouseLeave={toggleIngredient}
                                />
                            </div>

                            <div className="card-back">
                                <img src={portalReverse} alt="" id="portal" />
                                <div
                                    id="ingredients"
                                    className="d-flex justify-content-center align-items-center"
                                >
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: description,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <span>{name}</span>
                </div>
            )}
        </>
    );
};

export default HamburgerComponent;
