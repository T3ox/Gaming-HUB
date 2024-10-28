import "./styles.scss";
import Props from "./types";

const OverlayButton: React.FC<Props> = ({ text, handleClick }) => {
    return (
        <button
            type="button"
            className="btn btn-light overlay-button m-1"
            onClick={handleClick}
        >
            {text}
        </button>
    );
};

export default OverlayButton;
