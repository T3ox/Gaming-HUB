import React from 'react';
import {links} from "./links";
const Navbar = () => {
    return (
        <nav>
            <div >
                <ul className="navbar flex-container justify-right">
                    {
                        links.map(links => {
                            return (
                                <li key={links.id}>
                                    <a href={links.url}>{links.text}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;