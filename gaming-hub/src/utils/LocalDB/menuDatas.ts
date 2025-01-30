import Hamburger from "../Props";

export const menu: Hamburger[] = [
    {
        name: "Nabbo",
        description:
            "Carne bovina Piemontese, pomodoro ramato, insalata gentile, maionese",
        img: require("../../images/hamburger hub/1nabbo.png") as string,
        prices: {
            "100g": "7,00€",
            "200g": "8,00€",
            "300g": "10,50€",
        },
    },
    {
        name: "Chicken Glitch",
        description:
            "Suprema di pollo croccante, insalata gentile, pomodoro ramato, salsa HUB Special",
        img: require("../../images/hamburger hub/2chickenGlitch.png") as string,
        prices: {
            singolo: "6,90€",
            doppio: "9,40€",
        },
    },
    {
        name: "Cheater",
        description:
            "Carne bovina Piemontese, Asiago pressato D.O.P. cipolla rossa caramellata, pomodoro ramato, insalata gentile, salsa HUB Special",
        img: require("../../images/hamburger hub/3cheater.png") as string,
        prices: {
            "100g": "8,00€",
            "200g": "9,50€",
            "300g": "12,00€",
        },
    },
    {
        name: "Clutch",
        description:
            "Carne bovina Piemontese, frittatina, pancetta affumicata, cipolla rossa caramellata, scaglie di grana padano, pomodoro ramato, insalata gentile, salsa smokey Hub",
        img: require("../../images/hamburger hub/4clutch.png") as string,
        prices: {
            "100g": "9,50€",
            "200g": "11,00€",
            "300g": "13,50€",
        },
    },
    {
        name: "Pro",
        description:
            "Carne bovina Piemontese, funghi porcini trifolati, edamer tedesco, pancetta affumicata croccante, pomodoro ramato, rucola, salsa boscaiola alla Hub",
        img: require("../../images/hamburger hub/5pro.png") as string,
        prices: {
            "100g": "10,50€",
            "200g": "12,00€",
            "300g": "14,50€",
        },
    },
    {
        name: "Hit",
        description:
            "Carne bovina Piemontese, battuto di pomodoro secco, zucchine alla piastra, Cheddar, pancetta croccante, salsa tartara alla Hub",
        img: require("../../images/hamburger hub/6hit.png") as string,
        prices: {
            "100g": "10,00€",
            "200g": "11,50€",
            "300g": "14,00€",
        },
    },
    {
        name: "Kill",
        description:
            "Carne bovina Piemontese, peperoni saltati, spianata calabra croccante, cheddar, insalata gentile, salsa al gorgonzola D.O.P., salsa Hub Piccdantina",
        img: require("../../images/hamburger hub/7kill.png") as string,
        prices: {
            "100g": "10,50€",
            "200g": "12,00€",
            "300g": "14,50€",
        },
    },
    {
        name: "Hub",
        description:
            "Carne bovina Piemontese, melanzana fritta, Asiago pressato D.O.P., pancetta croccante, crema di melanzane, pomodoro ramato, insalata gentile, salsa tartara",
        img: require("../../images/hamburger hub/8hub.png") as string,
        prices: {
            "100g": "10,50€",
            "200g": "12,00€",
            "300g": "14,50€",
        },
    },
    {
        name: "Veggy",
        description:
            "Burratina pugliese, basilico fresco, battuto di pomodoro secco, melanzana fritta, pomodoro ramato",
        img: require("../../images/hamburger hub/9veggy.png") as string,
        prices: {
            Singolo: "8,50€",
            "con Hamburger 100g": "+11,00",
        },
    },
    {
        name: "Chicken Bot",
        /*description:
            "Suprema di pollo croccante,</br> crocchette di patate schiacciate,</br> scamorza affumicata,</br> pancetta croccante,</br> cipolla caramellata,</br> maionese,</br> salsa BBQ",*/
        description:
            "Suprema di pollo croccante, crocchette di patate schiacciate, scamorza affumicata a legna, pancetta croccante, cipolla caramellata, maionese al prezzemolo, salsa BBQ",
        img: require("../../images/hamburger hub/10chickenBot.png") as string,
        prices: {
            "100g": "9,50€",
            "200g": "12,00€",
        },
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
];
