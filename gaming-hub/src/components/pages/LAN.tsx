import LanTitle from "../atoms/LanTitle/LanTitle";
import Header from "../organisms/Header/Header";
import PCShowcase from "../organisms/PCShowcase/PCShowcase";
import "./styles.scss";
const bannerURL: string = require("../../images/hub_esterno_hq.jpeg");

const LAN = () => {
    return (
        <>
            <div className="header-lan">
                <Header
                    height="50svh"
                    heightLg="50svh"
                    image={bannerURL}
                    content={<LanTitle />}
                />
                <PCShowcase />
            </div>
        </>
    );
};

export default LAN;
