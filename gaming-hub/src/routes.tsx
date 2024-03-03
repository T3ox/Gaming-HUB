import Home from "./components/pages/Home/Home";

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
        element: <></>
    },
    {
        id: "3",
        text: "Chi Siamo",
        path: "/chiSiamo",
        element: <></>
    },
    {
        id: "4",
        text: "Indicazioni",
        path: "/indicazioni",
        element: <></>
    },
    {
        id: "5",
        text: "Prenota",
        path: "/prenota",
        element: <></>
    },
    {
        id: "0",
        text: "",
        path: "/*",
        element: <></>
    }
];