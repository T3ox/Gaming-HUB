import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useCookies } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import LAN from "./components/pages/LAN";
import Menu from "./components/pages/Menu";
import Test from "./components/pages/Test";
import CookieNotice from "./utils/Cookies/CookiesNotice";
import Layout from "./utils/Layout/Layout";

const App = () => {
    const [cookies] = useCookies(["cookieConsent"]);
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/salaLAN" element={<LAN />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
                {!cookies.cookieConsent && <CookieNotice />}
            </Layout>
        </BrowserRouter>
    );
};

export default App;
