import OverlayButton from "../../atoms/OverlayButton/OverlayButton";
import "./styles.scss";

const Overlay = () => {
    return (
        <div className="background-overlay text-white ">
            <div className="overlay-column container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column overlay-content">
                        <h2 className="p-1">Prova le nostre specialità</h2>
                        <p className="p-1">
                            Non perdere tempo e prenota subito
                        </p>
                        <OverlayButton text="PRENOTA UN TAVOLO" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
