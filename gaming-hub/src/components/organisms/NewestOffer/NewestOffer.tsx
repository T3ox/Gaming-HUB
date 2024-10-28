import "./styles.scss";
import Props from "./types";
//const newOfferImg = require("../../../images/Buddy_nobg.png") as string;

const NewestOffer: React.FC<Props> = ({ title, ingredients, img }) => {
    return (
        <div className="offer-container__header container d-flex justify-content-center">
            <div className="row">
                <div className="col-md-5 col-lg-6 offer-container" id="image">
                    <div className="offer-img d-flex align-items-center justify-content-center">
                        <img alt="" srcSet={img} />
                    </div>
                </div>
                <div className="col-md-7 col-lg-6 offer-container" id="text">
                    <div className="offer-description text-wrap ">
                        <span>SPECIAL</span>
                        <span id="offer-name">{title}</span>

                        <span>{ingredients}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewestOffer;
