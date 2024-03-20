import "./styles.scss";
const newOfferImg = require("../../../images/Buddy_nobg.png") as string;
const newOfferBG = require("../../../images/bg.png") as string;

const NewestOffer = () => {
    return (
        <>
            <div className="d-flex flex-column overflow-hidden justify-center align-items-center w-100 banner">
                <img
                    src={newOfferBG}
                    alt=""
                    className="background"
                />
                <div className="content w-100">
                    <div className="d-flex gap-3">
                        <div className="offer-img d-flex flex-column w-50 ms-0">
                            <img alt="" srcSet={newOfferImg} />
                        </div>
                        <div className="offer-description flex-column d-flex w-50 text-center position-relative">
                            <span>SPECIAL</span>
                            <span>BUDDY BURGER</span>
                            100g di carne bovina
                            <br />
                            razza Blonde D’Aquitaine,
                            <br />
                            Panelle di Zia Gina con
                            <br />
                            farina di ceci, prezzemolo e limone
                            <br />
                            prosciutto cotto, battuto <br />
                            di pomodoro e insalata gentile
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewestOffer;
