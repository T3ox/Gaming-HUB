import "./styles.scss";
const newOfferImg = require("../../../images/Buddy_nobg.png") as string;

const NewestOffer = () => {
    return (
        <div className="banner d-flex align-items-center">
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div
                        className="col-md-5 col-lg-6 offer-container"
                        id="image"
                    >
                        <div className="offer-img">
                            <img alt="" srcSet={newOfferImg} />
                        </div>
                    </div>
                    <div
                        className="col-md-7 col-lg-6 offer-container"
                        id="text"
                    >
                        <div className="offer-description text-wrap ">
                            <span>SPECIAL</span>
                            <span id="offer-name">BUDDY BURGER</span>
                            <span>
                                100g di carne bovina razza Blonde D’Aquitaine,
                                Panelle di Zia Gina con farina di ceci,
                                prezzemolo e limone, prosciutto cotto, battuto
                                di pomodoro e insalata gentile
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewestOffer;
