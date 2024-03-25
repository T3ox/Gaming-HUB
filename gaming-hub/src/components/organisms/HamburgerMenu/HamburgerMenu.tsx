import HamburgerComponent from "../../molecules/Hamburger/Hamburger";
import Hamburger from "./type";

const menu: Hamburger[] = [
    {
        nome: "Nabbo",
        ingredienti:
            "Carne bovina Piemontese,</br> pomodoro ramato</br>, insalata gentile,</br> maionese",
        img: "",
    },
    {
        nome: "Chicken Glitch",
        ingredienti:
            "Suprema di pollo croccante,</br> insalata gentile</br>, pomodoro ramato,</br> salsa HUB Special",
        img: "",
    },
    {
        nome: "Cheater",
        ingredienti:
            "Carne bovina Piemontese,</br> Asiago pressato D.O.P.</br> cipolla rossa caramellata,</br> pomodoro ramato,</br> insalata gentile,</br> salsa HUB Special",
        img: "",
    },
    {
        nome: "Clutch",
        ingredienti:
            "Carne bovina Piemontese,</br> frittatina con uova da allevamento a terra,</br> Pancetta affumicata,</br> cipolla rossa caramellata,</br> scaglie di grana padano,</br> pomodoro ramato</br>, insalata gentile,</br> salsa smokey Hub",
        img: "",
    },
    {
        nome: "Pro",
        ingredienti:
            "Carne bovina Piemontese,</br> funghi porcini trifolati,</br> edamer tedesco,</br> pancetta affumicata croccante,</br> pomodoro ramato,</br> rucola,</br> salsa boscaiola alla Hub",
        img: "",
    },
    {
        nome: "Hit",
        ingredienti:
            "Carne bovina Piemontese,</br> battuto di pomodoro secco,</br> zucchine alla piastra,</br> Cheddar,</br> pancetta croccante,</br> salsa tartara alla Hub",
        img: "",
    },
    {
        nome: "Kill",
        ingredienti:
            "Carne bovina Piemontese,</br> peperoni saltati,</br> spianata calabra croccante,</br> cheddar,</br> insalata gentile,</br> salsa al gorgonzola D.O.P.,</br> salsa Hub picantina",
        img: "",
    },
    {
        nome: "Hub",
        ingredienti:
            "Carne bovina Piemontese,</br> melanzana fritta,</br> Asiago pressato D.O.P.,</br> pancetta croccante,</br> crema di melanzane,</br> pomodoro ramato,</br> insalata gentile,</br> salsa tartara",
        img: "",
    },
    {
        nome: "Veggy",
        ingredienti:
            "Burratina pugliese,</br> basilico fresco,</br> battuto di pomodoro secco,</br> melanzana fritta,</br> pomodoro ramato",
        img: "",
    },
    {
        nome: "Chicken Bot",
        ingredienti:
            "Suprema di pollo croccante,</br> crocchette di patate schiacciate,</br> scamorza affumicata a legna,</br> pancetta croccante,</br> cipolla caramellata,</br> maionese al prezzemolo,</br> salsa BBQ",
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
        </div>
    );
};

export default HamburgerMenu;
