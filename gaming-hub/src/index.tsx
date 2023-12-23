import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./App.css";
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