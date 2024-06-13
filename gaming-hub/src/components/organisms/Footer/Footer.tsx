import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const Footer = () => {
    return (
        <section
            className="footer-container"
            id="footer3-1r"
            data-rv-view="1350" /*style="margin-bottom: 466px;"*/
        >
            <div className="container">
                <div className="row content justify-content-center align-items-start mbr-black">
                    <div className="col-12 col-md-6 col-lg-4 pb-3 d-flex flex-column align-items-center">
                        <div className="contacts w-100 text-center">
                            <h3 className="contacts-title mbr-fonts-style pb-2 align-center display-5">
                                Contacts
                            </h3>
                            <p className="contacts-block mbr-fonts-style align-center display-7">
                                Email: info-hub@gmail.com
                                <br />
                                Telefono: +39 351 973 5045
                            </p>
                        </div>
                        <div className="address w-100 text-center">
                            <h3 className="address-title mbr-fonts-style pb-2 align-center display-5">
                                Indirizzo
                            </h3>
                            <p className="address-block mbr-fonts-style pb-3 align-center display-7">
                                Via Agostino Depretis, 12
                                <br />
                                Voghera, PV 27058
                            </p>
                        </div>
                        <div className="social-list w-100 text-center pb-3 ">
                            <h3 className="follow-title mbr-fonts-style pb-2 align-center display-5">
                                Follow
                            </h3>
                            <div className="social-container d-flex justify-content-center">
                                <a
                                    href="https://www.instagram.com/hub.voghera/"
                                    target="_blank"
                                    style={{ color: "white" }}
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        style={{ height: "40px" }}
                                        className="mx-2"
                                        to="www.google.com"
                                    />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@hub.voghera"
                                    target="_blank"
                                    style={{ color: "white" }}
                                    rel="noreferrer"
                                >
                                    <FontAwesomeIcon
                                        icon={faTiktok}
                                        style={{ height: "40px" }}
                                        className="mx-2"
                                    />
                                </a>
                                <div className="social-logo"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 opening-hours">
                        <h3 className="opening-hours-title pb-2 mbr-fonts-style display-5">
                            Opening Hours
                        </h3>
                        <div className="d-flex">
                            <div className="col-5 days-column mbr-fonts-style mbr-bold align-right display-7 d-flex">
                                <span>Lunedì</span>
                                <span>Martedì</span>
                                <span>Mercoledì</span>
                                <span>Giovedì</span>
                                <span>Venerdì</span>
                                <span>Sabato</span>
                                <span>Domenica</span>
                            </div>
                            <div className="col-7 hours-column mbr-fonts-style align-left display-7 d-flex">
                                <span>Chiuso</span>
                                <span>12-15:30, 17:30-23</span>
                                <span>12-15:30, 17:30-23</span>
                                <span>12-15:30, 17:30-23</span>
                                <span>12-00</span>
                                <span>12-00</span>
                                <span>17:30-00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Footer;
