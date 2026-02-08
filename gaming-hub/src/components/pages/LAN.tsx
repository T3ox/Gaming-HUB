import DynamicPage from "../../utils/SEO/DynamicPage";
import "./styles.scss";

const LAN = () => {
    return (
        <>
            <DynamicPage pageName="Sala LAN" />

            <div className="header-lan">
                <div className="wip d-flex justify-content-center align-items-center">
                    <h2>Novità in arrivo</h2>
                </div>
            </div>
        </>
    );
};

export default LAN;
