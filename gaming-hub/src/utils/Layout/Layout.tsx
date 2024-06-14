import React from "react";
import Footer from "../../components/organisms/Footer/Footer";
import Navbar from "../../components/organisms/Navbar/Navbar";
import Props from "./types";

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
