import React from "react";
import {Link} from "react-router-dom";
import Props from "./types";

const NavbarLink: React.FC<Props> = ({id, path, text}) => {
    
    return (
        <li key={id}>
            <Link to={path}>{text}</Link>
        </li>
    );
}

export default NavbarLink;
