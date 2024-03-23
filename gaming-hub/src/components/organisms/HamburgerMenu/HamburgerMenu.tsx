import HamburgerComponent from "../../molecules/Hamburger/Hamburger";
import "./styles.scss";
import Hamburger from "./type";

const menu: Hamburger[] = [
    {
        nome: "Nabbo",
        ingredienti:
            "Carne bovina Piemontese,</br> pomodoro ramato,</br> insalata gentile,</br> maionese.",
        img: "",
    },
    {
        nome: "Chicken Glitch",
        ingredienti:
            "Suprema di pollo croccante,</br> pomodoro ramato,</br> insalata gentile,</br> salsa HUB Special.",
        img: "",
    },
    {
        nome: "Cheater",
        ingredienti:
            "Carne bovina Piemontese,</br> Asiago pressato D.O.P.</br> cipolla rossa caramellata,</br> pomodoro ramato,</br> insalata gentile,</br> salsa HUB Special.",
        img: "",
    },
    {
        nome: "Cheater",
        ingredienti:
            "Carne bovina Piemontese,</br> Asiago pressato D.O.P.</br> cipolla rossa caramellata,</br> pomodoro ramato,</br> insalata gentile,</br> salsa HUB Special.",
        img: "",
    },
    {
        nome: "Cheater",
        ingredienti:
            "Carne bovina Piemontese,</br> Asiago pressato D.O.P.</br> cipolla rossa caramellata,</br> pomodoro ramato,</br> insalata gentile,</br> salsa HUB Special.",
        img: "",
    },
    {
        nome: "Cheater",
        ingredienti:
            "Carne bovina Piemontese,</br> Asiago pressato D.O.P.</br> cipolla rossa caramellata,</br> pomodoro ramato,</br> insalata gentile,</br> salsa HUB Special.",
        img: "",
    },
    {
        nome: "Cheater",
        ingredienti:
            "Carne bovina Piemontese,</br> Asiago pressato D.O.P.</br> cipolla rossa caramellata,</br> pomodoro ramato,</br> insalata gentile,</br> salsa HUB Special.",
        img: "",
    },
    {
        nome: "Cheater",
        ingredienti:
            "Carne bovina Piemontese,</br> Asiago pressato D.O.P.</br> cipolla rossa caramellata,</br> pomodoro ramato,</br> insalata gentile,</br> salsa HUB Special.",
        img: "",
    },
];

const HamburgerMenu = () => {
    return (
        <div className="container menu-container mt-5">
            <div className="row">
                {menu.map((hamburger, index) => (
                    <div className="col-3" key={index}>
                        <HamburgerComponent
                            name={hamburger.nome}
                            description=""
                            img=""
                        />
                    </div>
                ))}
            </div>
            {/*menu.map((hamburger, index) => (
                <div key={index}>
                    <h2>{hamburger.nome}</h2>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: hamburger.ingredienti,
                        }}
                    />
                    <img src={hamburger.img} alt={hamburger.nome} />
                </div>
                    ))*/}
        </div>
    );
};

export default HamburgerMenu;
