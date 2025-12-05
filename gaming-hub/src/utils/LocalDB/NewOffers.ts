import Hamburger from "../Props";

export const newOffers: Hamburger[] = [
    {
        name: "Critical burger",
        description:
            "Carne bovina piemontese, crema al Gorgonzola DOP, pera Kaiser piastrata, glassa all'aceto balsamico, cavolo cappuccio marinato.",
        prices: {
            "100g": "11,50€",
            "200g": "13,00€",
            "300g": "15,50€",
        },
        img: require("../../images/Offers/criticalBurger.png") as string,
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
