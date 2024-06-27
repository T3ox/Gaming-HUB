import React, { useEffect, useRef } from "react";

import ImageVetrina from "../../atoms/VetrinaImage/VetrinaImage";
import VetrinaText from "../../molecules/VetrinaText/VetrinaText";
import "./styles.scss";
import Props from "./types";

const Vetrina: React.FC<Props> = ({ type, text, description, image, href }) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null, // usiamo l'elemento principale come root
            rootMargin: "0px", // nessun margine
            threshold: 0.5, // soglia del 50% di visibilità
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Se l'elemento è visibile, attiva l'effetto di fade in
                    textRef.current?.classList.add("fade-in");
                }
            });
        }, options);

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        // Pulizia dell'Observer quando il componente si smonta
        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);

    return (
        <section className="dynamic-container" id={type}>
            <div className="container container-vetrina">
                <div className="row justify-content-center">
                    <div
                        ref={textRef}
                        className="col-12 col-md-5 col-lg-6 text-container vetrina-container justify-content-end"
                    >
                        <VetrinaText text={text} description={description} />
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 image-container vetrina-container justify-content-center">
                        <ImageVetrina imgSrc={image} alt="Menu" href={href} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vetrina;
