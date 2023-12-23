import React from 'react';
import Home from "./components/pages/Home/Home";
import Menu from "./components/pages/Menu";
import About from "./components/pages/About";
import Indicazioni from "./components/pages/Indicazioni";
import Prenota from "./components/pages/Prenota";
import ErrorPage from "./components/pages/ErrorPage";

export const routes = [
    {
        id: "1",
        text: "Home",
        path: "/",
        element: <Home/>
    },
    {
        id: "2",
        text: "Menu",
        path: "/menu",
        element: <Menu/>
    },
    {
        id: "3",
        text: "Chi Siamo",
        path: "/chiSiamo",
        element: <About />
    },
    {
        id: "4",
        text: "Indicazioni",
        path: "/indicazioni",
        element: <Indicazioni />
    },
    {
        id: "5",
        text: "Prenota",
        path: "/prenota",
        element: <Prenota />
    },
    {
        id: "0",
        text: "",
        path: "/*",
        element: <ErrorPage/>
    }
];