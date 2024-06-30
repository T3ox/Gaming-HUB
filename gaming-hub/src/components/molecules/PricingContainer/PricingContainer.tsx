import "./styles.scss";
import Props from "./types";

const PricingContainer: React.FC<Props> = ({ pricing, duration }) => {
    const formattedCost = (): string => {
        const regex = /^[0-9,]+$/;
        return regex.test(pricing) ? `€ ${pricing}` : pricing;
    };

    return (
        <div className="pricing-container d-flex flex-column align-items-center justify-content-center">
            <div className="pricing-container__pricing text-center">
                <span
                    className="pricing-amount"
                    dangerouslySetInnerHTML={{ __html: formattedCost() }}
                />
            </div>
            <div className="pricing-container__duration">{duration}</div>
        </div>
    );
};

export default PricingContainer;
