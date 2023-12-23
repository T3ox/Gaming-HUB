import React from "react";
import { Link } from "react-router-dom";
import Props from "./types";

const listStyles: React.CSSProperties = {
    padding: "30px 16px",
}

const linkStyles: React.CSSProperties = {
    fontSize: "1em",
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#bebebe",
    margin: "auto",
    textDecoration: "none",
}

const NavbarLink: React.FC<Props> = ({id, path, text}) => {
    return (
        <li  key={id} style={listStyles}>
            <Link to={path} style={linkStyles}>{text}</Link>
        </li>
    );
}

export default NavbarLink;
