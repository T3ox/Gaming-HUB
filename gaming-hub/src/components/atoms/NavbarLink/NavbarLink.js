import React from "react";

const NavbarLink = ({ link }) => {
    console.log(link);

    return (
        <li key={link.id}>
            <a href={link.url}>{link.text}</a>
        </li>
    );
}

export default NavbarLink;
