import Hamburger from "../Props";

export const newOffers: Hamburger[] = [
    {
        name: "Scary Burger",
        description:
            "Carne bovina piemontese, salsa al curry, doppio Cheddar, cipolla caramellata, pancetta croccante, insalata gentile, pomodoro ramato.",
        prices: {
            "100g": "12,00€",
            "200g": "13,50€",
            "300g": "16,00€",
        },
        img: require("../../images/Offers/scaryBurger.png") as string,
    },
    {
        name: "Season 6",
        description:
            "Carne bovina Piemontese, pesto di rucola e noci, Brie bretone, speck Alto Adige IGP, salsa dolcepiccante ai fichi, crumble di noci",
        prices: {
            "100g": "14,50€",
            "200g": "16,00€",
            "300g": "18,50€",
        },
        img: require("../../images/Offers/season6.png") as string,
    },
];
