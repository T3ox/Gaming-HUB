import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";


const root = createRoot(
    document.getElementById("root") as HTMLElement,
    );
root.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
);

reportWebVitals();