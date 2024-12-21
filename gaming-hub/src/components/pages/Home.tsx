import { db } from "../../utils/LocalDB/homeDatas";
import DynamicPage from "../../utils/SEO/DynamicPage";
import Header from "../organisms/Header/Header";
import Vetrina from "../organisms/Vetrina/Vetrina";
const bannerURL: string = require("../../images/esterno.jpg");

const Home = () => {
    return (
        <>
            <DynamicPage pageName="Home" />
            
            <Header
                height="60svh"
                heightLg="100svh"
                image={bannerURL}
                content={<></>}
            />
            <Vetrina type="menu" {...db.menu} href="/menu" />
            <Vetrina type="lan" {...db.lan} href="/salaLAN" />
        </>
    );
};

export default Home;
