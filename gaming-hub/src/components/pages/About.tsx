import { useEffect } from "react";
import { aboutDatas } from "../../utils/LocalDB/aboutDatas";
import Header from "../organisms/Header/Header";
import Overlay from "../organisms/Overlay/Overlay";
import Vetrina from "../organisms/Vetrina/Vetrina";

const About = () => {
    const aboutUsBannerURL: string = require("../../images/hub_locale.jpg");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header
                height="40svh"
                heightLg="50svh"
                image={aboutUsBannerURL}
                content={<></>}
            />
            <Vetrina
                type="story"
                text={aboutDatas.title}
                description={aboutDatas.description}
                image={aboutDatas.image}
                href=""
            />
            <Overlay />
        </>
    );
};

export default About;
