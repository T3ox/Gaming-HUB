import "./styles.scss";
import Props from "./types";

const OverlayButton: React.FC<Props> = ({ text }) => {
    return (
        <button type="button" className="btn btn-primary overlay-button m-1">
            {text}
        </button>
    );
};

export default OverlayButton;
