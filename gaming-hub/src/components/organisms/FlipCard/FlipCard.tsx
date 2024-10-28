import "./styles.css";

const FlipCard = () => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <h2>Front</h2>
                </div>

                <div className="card-back">
                    <h2>Back</h2>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
