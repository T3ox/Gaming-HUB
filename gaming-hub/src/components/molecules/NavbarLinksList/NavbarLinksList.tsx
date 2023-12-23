import React from 'react';
import { routes } from "../../../routes";
import NavbarLink from "../../atoms/NavbarLink/NavbarLink";

const BannerNavbarStyles: React.CSSProperties = {
    height: "100px",
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(3px)",
    padding: "0 2%",
    overflow: "hidden",
    position: "sticky",
    zIndex: "1",
}

const styles: React.CSSProperties = {
    background: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(3px)",
    padding: "0 2%",
    overflow: "hidden",
    position: "sticky",
    zIndex: "1",
    display: "flex",
    justifyContent: "flex-end",
    listStyle: "none",
}

const NavbarLinksList = () => {
    return (
        <ul style={styles}>
            {routes.map(link => {
                console.log(link.path)
                if (link.path === "/" || link.path === "/*") return null;
                return <NavbarLink {...link} />;
            })}
        </ul>
    );
};

export default NavbarLinksList;