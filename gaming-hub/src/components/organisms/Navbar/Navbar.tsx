import { useState } from "react";
import "./styles.scss";

const Navbar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const whatsappUrl = `https://wa.me/+393519735045`;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand fs-4" href="/">
                    Home
                </a>
                <button
                    className="navbar-toggler shadow-none border-0"
                    type="button"
                    onClick={() => setShowOffcanvas(true)}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className={`sidebar offcanvas offcanvas-end ${
                        showOffcanvas ? "show overflow-hidden" : "hiding"
                    }`}
                    tabIndex={-1}
                    id="offcanvasNavbar"
                >
                    <div className="offcanvas-header text-white">
                        {/*<h5
                            className="offcanvas-title"
                            id="offcanvasNavbarLabel"
                        >
                            Offcanvas
                        </h5>*/}
                        <button
                            type="button"
                            onClick={() => setShowOffcanvas(false)}
                            className="btn-close btn-close-white shadow-none"
                        />
                    </div>
                    <div className="offcanvas-body d-flex">
                        <ul className="navbar-nav justify-content-end align-items-center fs-5 flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/menu">
                                    Menu
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/about">
                                    Chi Siamo
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="/indicazioni">
                                    Indicazioni
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a
                                    className="nav-link"
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Prenota
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
