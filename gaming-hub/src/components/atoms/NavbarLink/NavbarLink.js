import React from "react";
import {Link} from "react-router-dom";

const NavbarLink = ({ link }) => {

    return (
        <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
        </li>
    );
}

export default NavbarLink;
