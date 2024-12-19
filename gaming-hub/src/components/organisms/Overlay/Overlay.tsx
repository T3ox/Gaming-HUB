import OverlayButton from "../../atoms/OverlayButton/OverlayButton";
import "./styles.scss";
const whatsappUrl = `https://wa.me/+393519735045`;
const backgroundImage = require("../../../images/hub_menu.jpeg");
const Overlay = () => {
    return (
        <div className="background-overlay text-white d-flex justify-content-center align-items-center">
            <div className="overlay-column container">
                <div className="row" >
                    <div className="col-lg-6 d-flex flex-column overlay-content pb-4 pb-lg-0">
                        <h2 className="p-1">Prova le nostre specialità</h2>
                        <p className="p-1">
                            Non perdere tempo e prenota subito
                        </p>
                        <OverlayButton
                            text="PRENOTA UN TAVOLO"
                            handleClick={() => {
                                window.open(whatsappUrl, "_blank");
                            }}
                        />
                    </div>
                </div>
            </div>
            <img className="overlay-image" alt="" src={backgroundImage} />
        </div>
    );
};

export default Overlay;
