import Banner from "../../organisms/Header/Header";
import Vetrina from "../../organisms/Vetrina/Vetrina";

const imgMenu = require("../../../images/about.jpg") as string;
const imgLAN = require("../../../images/sala_LAN.jpg") as string;

const db = {
    menu: {
        text: "Menu",
        description: "Good Food & Gaming Zone",
        image: "",
    },
    lan: {
        text: "La Sala LAN",
        description: "Il gaming è anche uno stile di vita, infatti l’Hub non è una sala giochi, è una cosa molto diversa, dove ci si può divertire socializzando",
        image: imgLAN,
    }
}

const Home = () => {
    return (
        <div>
            <Banner />
            <Vetrina type="menu" {...db.menu}/>
            <Vetrina type="lan" {...db.lan}/>
        </div>
    );
};

export default Home;
