import { useEffect, useState } from "react";
import "./styles.scss";

const Navbar = () => {
    const whatsappUrl = `https://wa.me/+393519735045`;
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        document.body.style.overflow = "auto";
    };

    const handleShow = () => {
        setShow(true);
        document.body.style.overflow = "hidden";
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <header id="navbar-header">
            <nav className={`navbar navbar-expand-md navbar-dark bg-black`}>
                <a className="navbar-brand fs-4" href="/">
                    Home
                </a>
                <button
                    className="navbar-toggler shadow-none border-0"
                    type="button"
                    onClick={handleShow}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className={`collapse navbar-collapse`}
                    //${show ? "show overflow-hidden" : "hiding"} to enable show, non so usarlo
                    id="navbarNav"
                >
                    <ul className="navbar-nav justify-content-end align-items-center fs-5 flex-grow-1 pe-3 ">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/menu">
                                Menù
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/about">
                                Chi Siamo
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/salaLAN">
                                Sala
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
            </nav>
            <div
                className={`offcanvas offcanvas-end ${
                    show ? "show overflow-hidden" : "hiding"
                }`}
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div className="offcanvas-header">
                    <button
                        type="button"
                        className={`btn-close btn-close-white`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        onClick={handleClose}
                    />
                </div>
                <div className="offcanvas-body text-white d-flex">
                    <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
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
                            <a className="nav-link" href="/salaLAN">
                                Sala
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
        </header>
    );
};

export default Navbar;
