import { useState } from "react";
import Props from "../../../utils/type";
import "./styles.scss";
const portal = require("../../../images/portal.png") as string;
//const panino = require("../../../images/Buddy_nobg.png") as string;

const HamburgerComponent: React.FC<Props> = ({ name, description, img }) => {
    const [isHovered, setIsHovered] = useState(false);

    const toggleIngredient = () => {
        setIsHovered(!isHovered);
    };

    /*
    className={` panino-shower ${
                    isHovered ? "ingredients-toggled" : ""
                }`}
    */

    return (
        <div className="panino-container d-flex flex-column align-items-center">
            {/*<div className={`panino-shower`}>
                <img src={portal} alt="" id="portal" />
                <img
                    src={img}
                    alt=""
                    id="hamburger"
                    className={`${isHovered ? "ingredients-toggled" : ""}`}
                    onMouseEnter={toggleIngredient}
                    onMouseLeave={toggleIngredient}
                />
                <p
                    id="ingredients"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>*/}

            <div className="panino-shower">
                
            </div>
            <span>{name}</span>
        </div>
    );
};

export default HamburgerComponent;
