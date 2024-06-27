import { lanDatas } from "../../../utils/LocalDB/lanDatas";
import Vetrina from "../Vetrina/Vetrina";
import "./styles.scss";

const PCShowcase = () => {
    return (
        <section className="lan-pc-specs">
            <Vetrina
                type="lanPC"
                text={lanDatas.title}
                description={lanDatas.description}
                image={lanDatas.image}
                href=""
            />
        </section>
    );
};

export default PCShowcase;
