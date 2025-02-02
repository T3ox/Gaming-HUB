interface Props {
    isForward: boolean;
}

const CarouselNavigationArrow: React.FC<Props> = ({ isForward }) => {
    return (
        <div>
            {isForward ? (
                <button
                    style={{ width: "10%" }}
                    className="carousel-control-prev mx-3"
                    type="button"
                    data-bs-target="#carouselControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Precedente</span>
                </button>
            ) : (
                <button
                    style={{ width: "10%" }}
                    className="carousel-control-next mx-3"
                    type="button"
                    data-bs-target="#carouselControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    />
                    <span className="visually-hidden">Successivo</span>
                </button>
            )}
        </div>
    );
};

export default CarouselNavigationArrow;
