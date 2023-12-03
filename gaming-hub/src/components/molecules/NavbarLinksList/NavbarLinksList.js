import React from 'react';
import {links} from "../../../links";
import NavbarLink from "../../atoms/NavbarLink/NavbarLink";
const NavbarLinksList = () => {
    return (
            <ul className="navbar flex-container justify-right">
                {
                    links.map(link => {
                        return (
                            <NavbarLink key={link.id} link={link} />
                        );
                    })
                }
            </ul>
    );
};

export default NavbarLinksList;