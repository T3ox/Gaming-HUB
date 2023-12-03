import React from 'react';
import {links} from "../../../links";
import NavbarLinksList from "../../molecules/NavbarLinksList/NavbarLinksList";

const Navbar = () => {
    return (
        <nav className="flex-container">
            <h2>Gaming HUB Voghera</h2>
            <NavbarLinksList />
        </nav>
    )
}

export default Navbar;