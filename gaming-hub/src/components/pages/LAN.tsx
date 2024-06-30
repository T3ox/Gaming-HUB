import LanTitle from "../atoms/LanTitle/LanTitle";
import Header from "../organisms/Header/Header";
import PCShowcase from "../organisms/PCShowcase/PCShowcase";
import PricingOverlay from "../organisms/PricingOverlay/PricingOverlay";
import "./styles.scss";
const bannerURL: string = require("../../images/hub_esterno_hq.jpeg");

const LAN = () => {
    return (
        <>
            <div className="header-lan">
                <Header
                    height="60svh"
                    heightLg="60svh"
                    image={bannerURL}
                    content={<LanTitle />}
                />
                <PCShowcase />
                <PricingOverlay />
            </div>
        </>
    );
};

export default LAN;
