import { forwardRef } from "react";
import { lanDatas } from "../../../utils/LocalDB/lanDatas";
import Vetrina from "../Vetrina/Vetrina";
import "./styles.scss";

const PCShowcase = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <section className="lan-pc-specs">
            <div ref={ref}>
                <Vetrina
                    type="lanPC"
                    text={lanDatas.title}
                    description={lanDatas.description}
                    image={lanDatas.image}
                    href=""
                />
            </div>
        </section>
    );
});

export default PCShowcase;
