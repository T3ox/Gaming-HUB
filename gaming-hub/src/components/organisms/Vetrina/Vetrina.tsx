import React, { useEffect, useRef } from "react";
import ImageVetrina from "../../atoms/VetrinaImage/VetrinaImage";
import VetrinaText from "../../molecules/VetrinaText/VetrinaText";
import "./styles.scss";
import Props from "./types";

const Vetrina: React.FC<Props> = ({ type, text, description, image, href }) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Se l'elemento è visibile, attiva l'effetto di fade in
                    textRef.current?.classList.add("fade-in");
                }
            });
        }, options);

        const currentTextRef = textRef.current; // Copia il valore di textRef.current in una variabile

        if (currentTextRef) {
            observer.observe(currentTextRef);
        }

        // Pulizia dell'Observer quando il componente si smonta
        return () => {
            if (currentTextRef) {
                observer.unobserve(currentTextRef); // Usa la variabile locale per la pulizia
            }
        };
    }, []); // Il secondo array di dipendenze è vuoto per eseguire l'effetto una sola volta

    return (
        <section className="dynamic-container" id={type}>
            <div className="container container-vetrina">
                <div className="row justify-content-center">
                    <div
                        ref={textRef}
                        className="col-12 col-md-5 col-lg-6 text-container vetrina-container justify-content-center"
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
