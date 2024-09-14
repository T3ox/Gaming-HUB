import "./styles.scss";
import Props from "./types";
const newOfferImg = require("../../../images/Buddy_nobg.png") as string;

const NewestOffer: React.FC<Props> = ({ title, ingredients, img }) => {
    return (
        <div className="offer-container__header container d-flex justify-content-center">
            <div className="row">
                <div className="col-md-5 col-lg-6 offer-container" id="image">
                    <div className="offer-img d-flex align-items-center justify-content-center">
                        <img
                            alt=""
                            srcSet={img}
                            //srcSet={newOfferImg}
                        />
                    </div>
                </div>
                <div className="col-md-7 col-lg-6 offer-container" id="text">
                    <div className="offer-description text-wrap ">
                        <span>SPECIAL</span>
                        <span id="offer-name">{title}</span>

                        <span>
                            {/*100g di carne bovina razza Blonde D’Aquitaine,
                            Panelle di Zia Gina con farina di ceci, prezzemolo e
                            limone, prosciutto cotto, battuto di pomodoro e
                            insalata gentile*/}
                            {ingredients}
                        </span>
                    </div>
                </div>
            </div>
            {/*<div className="d-flex align-items-center">*/}
            {/*</div>*/}
        </div>
    );
};

export default NewestOffer;
