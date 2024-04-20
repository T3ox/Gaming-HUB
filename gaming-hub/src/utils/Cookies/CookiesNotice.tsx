import { useCookies } from "react-cookie";

const CookieNotice = () => {
    const [cookies, setCookie] = useCookies(["cookieConsent"]);
    const giveCookieConsent = () => {
        setCookie("cookieConsent", true, { path: "/" });
    };
    return (
        <div
            className="cookie-notice"
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "#f0f0f0",
                padding: "10px",
                borderTop: "1px solid #ccc",
                overflow: "hidden",
            }}
        >
            <p>
                Questo sito utilizza i cookie per offrirti un'esperienza
                migliore.
            </p>
            <a href={"/privacy-policy"}>Learn more.</a>
            <button onClick={giveCookieConsent}>Accetta</button>
        </div>
    );
};

export default CookieNotice;
