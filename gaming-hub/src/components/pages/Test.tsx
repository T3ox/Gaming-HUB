const Test = () => {
    return (
        <div className="container mt-5 bg-black">
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >
                <div className="carousel-inner">
                    {/* Primo elemento */}
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/500"
                                    alt="Prima immagine"
                                />
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div>
                                    <h3>Titolo 1</h3>
                                    <p>
                                        Questo è un testo di esempio per la
                                        prima slide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondo elemento */}
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/500"
                                    alt="Seconda immagine"
                                />
                            </div>
                            <div className="col-md-6 d-flex align-items-center">
                                <div>
                                    <h3>Titolo 2</h3>
                                    <p>
                                        Questo è un testo di esempio per la
                                        seconda slide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controlli per navigare nel carosello */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Precedente</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Successivo</span>
                </button>
            </div>

            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/500"
                            alt="Prima immagine"
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/500"
                            alt="Seconda immagine"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Test;
