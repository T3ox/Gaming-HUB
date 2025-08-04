import Hamburger from "../Props";

export const newOffers: Hamburger[] = [

    {
        name: "Season 5",
        description:
            "Carne bovina piemontese, salsa di pomodoro della nonna, friarielli alla napoletana e mozzarella di bufala campana DOP",
        prices: {
            "100g": "14,00€",
            "200g": "15,50€",
            "300g": "18,00€",
        },
        img: require("../../images/Offers/season5.png") as string,
    },
    {
        name: "tartHUB",
        description:
            "Tartar di Fassona Piemontese condita con senape, scaglie di Grana Padano D.O.P, rucola, " +
            "salsa delicata all’aglio nero",
        prices: {
            "150g": "13,00€",
        },
        img: require("../../images/Offers/tartHUB.png") as string,
    },
];
