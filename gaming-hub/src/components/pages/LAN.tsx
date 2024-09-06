import { useRef } from "react";
import LanTitle from "../atoms/LanTitle/LanTitle";
import Header from "../organisms/Header/Header";
import PCShowcase from "../organisms/PCShowcase/PCShowcase";
import PricingOverlay from "../organisms/PricingOverlay/PricingOverlay";
import "./styles.scss";
const bannerURL: string = require("../../images/esterno.jpg");

const LAN = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className="header-lan">
                <Header
                    height="60svh"
                    heightLg="60svh"
                    image={bannerURL}
                    content={<LanTitle targetRef={targetRef} />}
                />
                <PCShowcase ref={targetRef} />
                <PricingOverlay />
            </div>
        </>
    );
};

export default LAN;
