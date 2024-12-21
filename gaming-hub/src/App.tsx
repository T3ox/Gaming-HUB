import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import "bootstrap/dist/js/bootstrap.min.js";
import { useCookies } from "react-cookie";
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import LAN from "./components/pages/LAN";
import Menu from "./components/pages/Menu";
import CookieNotice from "./utils/Cookies/CookiesNotice";
import Layout from "./utils/Layout/Layout";

const App = () => {
    const [cookies] = useCookies(["cookieConsent"]);
    return (
        <BrowserRouter>
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Matteo" />
            <meta name="keywords" content="hub Voghera, hamburgeria Voghera, sala LAN Voghera, gaming Voghera, cena Voghera, hamburger e videogiochi, hamburger artigianali, panini Voghera, hamburger oltrepo" />
            <meta name="description" content="Scopri Good Food & Gaming Zone a Voghera: un'esperienza unica che combina hamburger artigianali e una sala LAN con PC di fascia alta per appassionati di gaming." />
        </Helmet>

            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/salaLAN" element={<LAN />} />
                </Routes>
                {!cookies.cookieConsent && <CookieNotice />}
            </Layout>
        </BrowserRouter>
    );
};

export default App;
