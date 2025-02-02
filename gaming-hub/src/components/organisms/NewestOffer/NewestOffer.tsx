import Hamburger from "../../../utils/Props";
import "./styles.scss";
//const newOfferImg = require("../../../images/Buddy_nobg.png") as string;

const NewestOffer: React.FC<Hamburger> = ({
    name,
    description,
    img,
    prices,
}) => {
    return (
        <div className="offer-container__header container d-flex justify-content-center">
            <div className="row">
                <div className="col-md-5 col-lg-6 offer-container" id="image">
                    <div className="offer-img d-flex align-items-center justify-content-center">
                        <img alt="" srcSet={img} />
                    </div>
                </div>
                <div className="col-md-7 col-lg-6 offer-container" id="text">
                    <div className="offer-description d-flex justify-content-center align-items-center flex-column text-wrap ">
                        <span className="offer-description_name">
                            {name.toUpperCase()}
                        </span>
                        <span className="offer-description_ingredients mb-3">
                            {description}
                        </span>

                        <div className="offer-description_price d-flex  align-items-center justify-content-center flex-wrap">
                            {Object.entries(prices).map(([size, price]) => (
                                <span key={size}>
                                    {size}: {price}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewestOffer;
