import "bootstrap/dist/css/bootstrap.min.css";
import { useCookies } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import CookieNotice from "./utils/Cookies/CookiesNotice";

const App = () => {
    const [cookies] = useCookies(["cookieConsent"]);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
            {!cookies.cookieConsent && <CookieNotice />}
        </BrowserRouter>
    );
};

export default App;
