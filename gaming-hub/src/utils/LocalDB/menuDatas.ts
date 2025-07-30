import Hamburger from "../Props";

export const menu: Hamburger[] = [
    {
        name: "Nabbo",
        description:
            "Carne bovina Piemontese, pomodoro ramato, insalata gentile, maionese",
        img: require("../../images/hamburger hub/nabbo.png") as string,
        prices: {
            "100g": "8,00€",
            "200g": "9,00€",
            "300g": "11,50€",
        },
    },
    {
        name: "Chicken Glitch",
        description:
            "Suprema di pollo croccante, insalata gentile, pomodoro ramato, salsa HUB Special",
        img: require("../../images/hamburger hub/chickenGlitch.png") as string,
        prices: {
            singolo: "6,90€",
            doppio: "9,40€",
        },
    },
    {
        name: "Cheater",
        description:
            "Carne bovina Piemontese, Asiago pressato D.O.P. cipolla rossa caramellata, pomodoro ramato, insalata gentile, salsa HUB Special",
        img: require("../../images/hamburger hub/cheater.png") as string,
        prices: {
            "100g": "9,00€",
            "200g": "10,50€",
            "300g": "13,00€",
        },
    },
    {
        name: "Smash",
        description:
            "Il classico Cheeseburger ma Smashed (con cheddar, cetriolino, pancetta croccantissima e ketchup)",
        prices: {
            "100g": "9,50€",
            "200g": "11,00€",
            "300g": "13,50€",
        },
        img: require("../../images/Offers/smash.png") as string,
    },
    {
        name: "Hit",
        description:
            "Carne bovina Piemontese, battuto di pomodoro secco, zucchine alla piastra, Cheddar, pancetta croccante, salsa tartara alla Hub",
        img: require("../../images/hamburger hub/hit.png") as string,
        prices: {
            "100g": "11,00€",
            "200g": "12,50€",
            "300g": "15,00€",
        },
    },
    {
        name: "Pro",
        description:
            "Carne bovina Piemontese, funghi porcini trifolati, edamer tedesco, pancetta affumicata croccante, pomodoro ramato, rucola, salsa boscaiola alla Hub",
        img: require("../../images/hamburger hub/pro.png") as string,
        prices: {
            "100g": "11,50€",
            "200g": "13,00€",
            "300g": "15,50€",
        },
    },
    {
        name: "Kill",
        description:
            "Carne bovina Piemontese, peperoni saltati, spianata calabra croccante, cheddar, insalata gentile, salsa al gorgonzola D.O.P., salsa Hub Piccdantina",
        img: require("../../images/hamburger hub/kill.png") as string,
        prices: {
            "100g": "11,50€",
            "200g": "13,00€",
            "300g": "15,50€",
        },
    },
    {
        name: "Hub",
        description:
            "Carne bovina Piemontese, melanzana fritta, Asiago pressato D.O.P., pancetta croccante, crema di melanzane, pomodoro ramato, insalata gentile, salsa tartara",
        img: require("../../images/hamburger hub/hub.png") as string,
        prices: {
            "100g": "11,50€",
            "200g": "13,00€",
            "300g": "15,50€",
        },
    },
    {
        name: "Chicken Bot",
        description:
            "Suprema di pollo croccante, crocchette di patate schiacciate, scamorza affumicata a legna, pancetta croccante, cipolla caramellata, maionese al prezzemolo, salsa BBQ",
        img: require("../../images/hamburger hub/chickenBot.png") as string,
        prices: {
            "100g": "9,50€",
            "200g": "12,00€",
        },
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
    {
        name: "Clutch",
        description:
            "Carne bovina Piemontese, frittatina, pancetta affumicata, cipolla rossa caramellata, scaglie di grana padano, pomodoro ramato, insalata gentile, salsa smokey Hub",
        img: require("../../images/hamburger hub/Clutch.png") as string,
        prices: {
            "100g": "11,00€",
            "200g": "12,50€",
            "300g": "15,00€",
        },
    },
    {
        name: "Veggy",
        description:
            "Burratina pugliese, basilico fresco, battuto di pomodoro secco, melanzana fritta, pomodoro ramato",
        img: require("../../images/hamburger hub/veggy.png") as string,
        prices: {
            Singolo: "8,50€",
            "con Hamburger 100g": "11,00€",
        },
    },
    {
        name: "Vegan Burger",
        description:
            "Burger Vegano di soia e frumento, pesto di basilico 100% vegetale, finocchi marinati all'aceto " +
            "balsamico, pomodori confit e rucola",
        prices: {
            singolo: "13,50€",
        },
        img: require("../../images/Offers/vegan_burger.png") as string,
    },
];
