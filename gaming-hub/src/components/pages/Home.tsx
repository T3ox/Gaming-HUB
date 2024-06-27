import { db } from "../../utils/LocalDB/homeDatas";
import Header from "../organisms/Header/Header";
import Vetrina from "../organisms/Vetrina/Vetrina";
const bannerURL: string = require("../../images/hub_esterno_hq.jpeg");

const Home = () => {
    return (
        <>
            <Header
                height="60svh"
                heightLg="100svh"
                image={bannerURL}
                content={<></>}
            />
            <Vetrina type="menu" {...db.menu} href="/menu" />
            <Vetrina type="lan" {...db.lan} href="" />
        </>
    );
};

export default Home;
