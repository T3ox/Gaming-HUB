import Header from "../organisms/Header/Header";
import Vetrina from "../organisms/Vetrina/Vetrina";
const imgMenu = require("../../images/about.jpg") as string;
const imgLAN = require("../../images/sala_LAN2.jpg") as string;

const db = {
    menu: {
        text: "Esplora il nostro delizioso menu completo!",
        description:
            "Vieni a scoprire tutti i nostri succulenti hamburger con nomi ispirati " +
            "al mondo del gaming e con vastissima scelta. Clicca sulla foto qui sopra per sfogliare " +
            "il nostro menu completo e preparati a un'esperienza culinaria indimenticabile!",
        image: imgMenu,
    },
    lan: {
        text: "La Sala LAN",
        description:
            "Benvenuto da Hub: non una semplice sala LAN, ma un luogo dove il gaming diventa uno " +
            "stile di vita. Socializza e divertiti con amici e nuove conoscenze mentre mostri " +
            "le tue abilità su postazioni di fascia alta. Un luogo dove il divertimento è garantito.",
        image: imgLAN,
    },
};

const Home = () => {
    return (
        <div>
            <Header />
            <Vetrina type="menu" {...db.menu} />
            <Vetrina type="lan" {...db.lan} />
        </div>
    );
};

export default Home;
