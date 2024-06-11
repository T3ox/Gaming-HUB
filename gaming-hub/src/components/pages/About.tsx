import Header from "../organisms/Header/Header";
import Overlay from "../organisms/Overlay/Overlay";
import Vetrina from "../organisms/Vetrina/Vetrina";

const About = () => {
    const aboutUsBannerURL: string = require("../../images/hub_locale.jpg");
    const storyImage1: string = require("../../images/hamburger1_hub.jpg");

    return (
        <>
            <Header height="60svh" heightLg="60svh" image={aboutUsBannerURL} />
            <Vetrina
                type="story"
                text="Panini"
                description={`Non sono semplici hamburger quelli dell’Hub, ma sono cucinati con ingredienti di qualità (a cominciare dall’utilizzo della carne blonde d’Aquitaine), con abbinamenti molto originali e con i nomi che richiamano il linguaggio del gaming. Hamburger sia di carne che di pollo, ma per un pasto veloce è anche possibile ordinare un’insalata o i nuggets.
                \n Assieme al ristorante abbiamo anche una sala LAN dotata di 6 computer di fascia alta. Il gaming è sia uno stile di vita che una passione. L'obiettivo della sala è divertirsi e giocare mentre si socializza`}
                image={storyImage1}
                href=""
            />
            <Overlay />
        </>
    );
};

export default About;
