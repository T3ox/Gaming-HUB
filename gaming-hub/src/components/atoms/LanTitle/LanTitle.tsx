import OverlayButton from "../OverlayButton/OverlayButton";
import "./styles.scss";
import Props from "./types";

const LanTitle: React.FC<Props> = ({ targetRef }) => {
    const handleClick = () => {
        if (targetRef.current) {
            console.log("godo");
            targetRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }
    };
    return (
        <div className="header-lan-title d-flex flex-column align-items-center justify-content-center">
            <h2>
                6 Postazione dotate di computer di fascia altissima
                <br />
                per un esperienza al top della qualità
            </h2>
            <OverlayButton
                text="Guarda le postazioni"
                handleClick={handleClick}
            />
        </div>
    );
};

export default LanTitle;
