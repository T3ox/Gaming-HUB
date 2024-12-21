import { Helmet } from "react-helmet";
import Props from "./types";

const DynamicPage: React.FC<Props> = ({ pageName }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{pageName} - Hub Voghera</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Un'esperienza unica a Voghera che unisce hamburger artigianali con nomi ispirati al mondo del gaming e una sala LAN con PC di fascia alta." />
                <meta name="author" content="Matteo" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Good Food & Gaming Zone - Voghera" />
                <meta property="og:description" content="Un'esperienza unica a Voghera che unisce hamburger artigianali con nomi ispirati al mondo del gaming e una sala LAN con PC di fascia alta." />
                <meta property="og:url" content="https://www.hubgoodfood.it" />
            </Helmet>
        </>
    );
};

export default DynamicPage;