import React from 'react';
import NavbarLink from "../../atoms/NavbarLink/NavbarLink";
import {routes} from "../../../routes";
const NavbarLinksList = () => {
    return (
        <ul className="navbar flex-container justify-right">
            {routes.map(link => {
                console.log(link.path)
                if (link.path === "/" || link.path === "/*") return null;
                return <NavbarLink {...link} />;
            })}
        </ul>
    );
};
;

export default NavbarLinksList;