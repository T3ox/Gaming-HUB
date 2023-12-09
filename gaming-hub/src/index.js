import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom";
import Banner from "./components/organisms/Banner/Banner";
import NavbarLinksList from "./components/molecules/NavbarLinksList/NavbarLinksList";


const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);
