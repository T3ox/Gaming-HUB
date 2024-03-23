//import { routes } from "../../../routes";
import React from "react";
import NavbarLink from "../../atoms/NavbarLink/NavbarLink";

const styles: React.CSSProperties = {
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(3px)",
    padding: "0 2%",
    overflow: "hidden",
    position: "absolute",
    zIndex: "1",
    display: "flex",
    justifyContent: "flex-end",
    listStyle: "none",
    width: "100%",
};

const NavbarLinksList = () => {
    return (
        <ul style={styles}>
            <NavbarLink id="1" path="/menu" text="Menu" />
            <NavbarLink id="2" path="/chiSiamo" text="Chi Siamo" />
            <NavbarLink id="3" path="/indicazioni" text="Indicazioni" />
            <NavbarLink id="4" path="/prenota" text="Prenota" />
        </ul>
    );
};

export default NavbarLinksList;
