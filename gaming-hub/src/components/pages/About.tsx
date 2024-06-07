import Header from "../organisms/Header/Header";
import Vetrina from "../organisms/Vetrina/Vetrina";

const About = () => {
    const aboutUsBannerURL: string = require("../../images/hub_locale.jpg");
    const storyImage1: string = require("../../images/hamburger1_hub.jpg");
    const storyImage2: string = require("../../images/sala_gaming_hub.jpg");

    return (
        <>
            <Header height="60svh" image={aboutUsBannerURL} />
            <Vetrina
                type="story"
                text="Panini"
                description="Non sono semplici hamburger quelli dell’Hub, ma sono cucinati con ingredienti di qualità (a cominciare dall’utilizzo della carne blonde d’Aquitaine), con abbinamenti molto originali e con i nomi che richiamano il linguaggio del gaming. Hamburger sia di carne che di pollo, ma per un pasto veloce è anche possibile ordinare un’insalata o i nuggets."
                image={storyImage1}
                href=""
            />
            <Vetrina
                type="story2"
                text="Panini"
                description="Non sono semplici hamburger quelli dell’Hub, ma sono cucinati con ingredienti di qualità (a cominciare dall’utilizzo della carne blonde d’Aquitaine), con abbinamenti molto originali e con i nomi che richiamano il linguaggio del gaming. Hamburger sia di carne che di pollo, ma per un pasto veloce è anche possibile ordinare un’insalata o i nuggets."
                image={storyImage2}
                href=""
            />
        </>
    );
};

export default About;
