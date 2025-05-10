import Hamburger from "../Props";

export const newOffers: Hamburger[] = [
    {
        name: "Fuorisensia 2025",
        description:
            "Carne bovina Piemontese, squacquerone, ovetto in purgatorio con origano profumato, radicchio",
        prices: {
            "100g": "11,00€",
            "200g": "12,00€",
            "300g": "14,50€",
        },
        img: require("../../images/Offers/fuoriSensia.png") as string,
    },
    {
        name: "Season 5",
        description:
            "Carne bovina piemontese, salsa di pomodoro della nonna, friarielli alla napoletana e mozzarella di bufala campana DOP",
        prices: {
            "100g": "13,00€",
            "200g": "14,50€",
            "300g": "17,00€",
        },
        img: require("../../images/Offers/season5.png") as string,
    },
    {
        name: "HUBSMASH",
        description:
            "Il classico Cheeseburger ma Smashed (con cheddar, cetriolino, pancetta croccantissima e ketchup)",
        prices: {
            "100g": "8,50€",
            "200g": "10,00€",
            "300g": "12,50€",
        },
        img: require("../../images/Offers/smash.png") as string,
    },
    {
        name: "VEGAN BURGER",
        description:
            "Burger Vegano di soia e frumento, pesto di basilico 100% vegetale, finocchi marinati all'aceto " +
            "balsamico, pomodori confit e spinacino",
        prices: {
            singolo: "13,50€",
        },
        img: require("../../images/Offers/vegan_burger.png") as string,
    },
    {
        name: "Spicy Bot",
        description:
            "Suprema di pollo croccante, scamorza affumicata, cipolla caramellata, spianata " +
            "calabra piccante, crocchette di patate schiacciate, salsa bbq, " +
            "maionese al prezzemolo e salsa piccantina.",
        prices: {
            singolo: "9,50€",
            doppio: "12,00€",
        },
        img: require("../../images/Offers/spicy-bot.png") as string,
    },
];
