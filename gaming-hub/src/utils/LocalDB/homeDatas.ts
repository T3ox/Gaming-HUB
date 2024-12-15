const imgMenu = require("../../images/menuVetrina.jpg") as string;
const imgLAN = require("../../images/salaLAN.jpg") as string;

export const db = {
    menu: {
        text: "Esplora il nostro menu!",
        description:
            "Vieni a scoprire tutti i nostri succulenti hamburger con nomi ispirati " +
            "al mondo del gaming e con vastissima scelta. Clicca sulla foto per sfogliare " +
            "il nostro menu completo e preparati a un'esperienza culinaria indimenticabile!",
        image: imgMenu,
    },
    lan: {
        text: "La Sala LAN",
        description:
            "Benvenuto all'Hub: non una semplice sala LAN, ma un luogo dove il gaming diventa uno " +
            "stile di vita. Socializza e divertiti con amici e nuove conoscenze mentre mostri " +
            "le tue abilità su postazioni di fascia alta. Un luogo dove il divertimento è garantito.",
        image: imgLAN,
    },
};
