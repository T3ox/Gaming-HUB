import "./styles.scss";
import Props from "./type";
const portal = require("../../../images/portal.png") as string;
const panino = require("../../../images/Buddy_nobg.png") as string;

const HamburgerComponent: React.FC<Props> = ({ name }) => {
    return (
        <div className="panino-container d-flex flex-column align-items-center">
            <div className="panino-shower">
                <img src={portal} alt="" />
                <img src={panino} alt="" />
            </div>
            <span className="mb-4">{name}</span>
        </div>
    );
};

export default HamburgerComponent;
