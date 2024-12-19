import { newOffers } from "../../../utils/LocalDB/NewOffers";
import CarouselNavigationArrow from "../../atoms/CarouselNavigationArrow/CarouselNavigationArrow";
import NewestOffer from "../NewestOffer/NewestOffer";
import "./styles.scss";

/*interface CarouselRef extends HTMLDivElement {
    carousel?: (action: string) => void;
}*/

const NewOfferCarousel = () => {
    return (
        <div className="banner">
            <div
                id="carouselControls"
                className="carousel slide position-relative h-100"
                data-bs-ride="carousel"
                data-bs-interval="90000"
            >
                <div className="carousel-indicators">
                    {newOffers.map((x, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselControls"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`slide ${index}`}
                            onClick={() => console.log(index)}
                        />
                    ))}
                </div>
                <div className="carousel-inner h-100 d-flex align-items-center">
                    {newOffers.map((offer, index) => (
                        <div
                            className={`carousel-item ${
                                index === 0 ? "active" : ""
                            }`}
                            key={index}
                        >
                            <>
                                <NewestOffer
                                    title={offer.hamburgerName}
                                    ingredients={offer.ingredients}
                                    img={offer.img}
                                />
                            </>
                        </div>
                    ))}
                </div>

                <CarouselNavigationArrow isForward={false} />
                <CarouselNavigationArrow isForward={true} />
            </div>
        </div>
    );
};

export default NewOfferCarousel;
