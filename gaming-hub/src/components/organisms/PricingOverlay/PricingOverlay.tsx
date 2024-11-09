import PricingContainer from "../../molecules/PricingContainer/PricingContainer";
import "./styles.scss";

const PricingOverlay = () => {
    return (
        <section className="pricing-overlay">
            <div className="pricing-overlay__container container">
                <div className="pricing-overlay__row flex-column flex-md-row row ">
                    <div className="pricing-overlay__column col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <h2 className="pricing-overlay__title">
                            Prezzi postazione LAN
                        </h2>
                        <p className="pricing-overlay__description">
                            Cosa non può mancare dopo un panino saziante se non
                            una bella sessione di gaming
                        </p>
                    </div>
                    <div className="pricing-overlay__column col-12 col-md-6 d-flex align-items-center justify-content-center container">
                        <div className="row">
                            <div className="col-6">
                                <PricingContainer
                                    pricing="GRATIS con menu"
                                    duration="30 min"
                                />
                            </div>
                            <div className="col-6">
                                <PricingContainer
                                    pricing="3,00"
                                    duration="1 ORA"
                                />
                            </div>
                            <div className="col-6">
                                <PricingContainer
                                    pricing="5,00"
                                    duration="1° ORA + BIBITA"
                                />
                            </div>
                            <div className="col-6">
                                <PricingContainer
                                    pricing="15,00"
                                    duration="5 ore + 2000 hubcoins"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingOverlay;
