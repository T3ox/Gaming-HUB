import Banner from "../../organisms/Header/Header";

const imgMenu = require("../../../images/season4.jpg");
const imgLAN = require("../../../images/sala_LAN2.jpg");

const VetrinaContent = {
    menu: {
        type: "menu",
        text: "Menu",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada quam lorem, a gravida mi viverra id. Praesent eget dignissim diam Morbi efficitur in odio et laoreet. Quisque venenatis placerat vehicula. Ab autem blanditiis, delectus dolorem excepturi, ipsum iste minima, molestias nisi odit quaerat quo.",
        image: imgMenu
    },
    LAN: {
        type: "LAN",
        text: "Sala LAN",
        description: "Il gaming è una passione diretta non solo ai giovani ma a tutte le generazioni. Il gaming è\n" +
            "anche uno stile di vita, infatti l'Hub non è una sala giochi, è una cosa molto diversa, dove\n" +
            "ci si può divertire socializzando. Diciamo che è un po' un antidoto contro il lockdown,\n" +
            "invece di giocare a casa ci si ritrova tutti insieme.",
        image: imgLAN
    }
}

const Home = () => {
    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;