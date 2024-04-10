import React, { useEffect, useRef } from "react";

import ImageVetrina from "../../atoms/VetrinaImage/ImageVetrina";
import VetrinaText from "../../molecules/VetrinaText/VetrinaText";
import "./styles.scss";
import Props from "./types";

const Vetrina: React.FC<Props> = ({ type, text, description, image }) => {
    const dynamicStyle: React.CSSProperties = {
        backgroundColor: type === "menu" ? "#8AA940" : "#7E1DC5",
        width: "100%",
    };

    const dynamicDirection: React.CSSProperties = {
        flexDirection: type === "menu" ? "row" : "row-reverse",
    };

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
        <div style={dynamicStyle}>
            <div
                className="container container-vetrina"
                style={{ maxWidth: "90% !important" }}
            >
                <div className="row my-md-5" style={dynamicDirection}>
                    <div
                        ref={textRef}
                        className="col-12 col-md-6 text-container vetrina-container"
                    >
                        <VetrinaText text={text} description={description} />
                    </div>
                    <div className="col-12 col-md-6 image-container vetrina-container">
                        <ImageVetrina imgSrc={image} alt="Menu" href="/menu" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vetrina;
