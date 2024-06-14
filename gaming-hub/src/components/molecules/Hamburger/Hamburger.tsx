import Props from "../../../utils/type";
import "./styles.scss";
const portal = require("../../../images/portal.png") as string;
//const panino = require("../../../images/Buddy_nobg.png") as string;

const HamburgerComponent: React.FC<Props> = ({ name, img }) => {
    return (
        <div className="panino-container d-flex flex-column align-items-center">
            <div className="panino-shower">
                <img src={portal} alt="" />
                <img src={img} alt="" id="hamburger" />
            </div>
            <span>{name}</span>
        </div>
    );
};

export default HamburgerComponent;
