import { useEffect } from "react";
import "./styles.scss";

const Dropdown = () => {
    const toppings: any[] = [
        {
            header: "FRITTI",
            content:
                "Patatine Fritte</br>" +
                "Crocchette di Patate</br>" +
                "Anelli di Cipolla</br>" +
                "Olive all'ascolana</br>" +
                "Verdure in pastella</br>" +
                "Hub Nuggets</br>",
        },
        {
            header: "DOLCI",
            content:
                "Cheeseckae ai frutti di bosco</br>" +
                "Torta della Nonna</br>" +
                "Souffle al cioccolato</br>" +
                "Tiramisù</br>" +
                "Caffè</br>",
        },
        {
            header: "BEVANDE",
            content:
                "Acqua</br>" +
                "Coca Cola e Coca Zero 33cl</br>" +
                "Aranciata Amara S.Pellegrino 33cl</br>" +
                "Aranciata S.Pellegrino 33cl</br>" +
                "Chinotto S.Pellegrino 33cl</br>" +
                "Sprite 33cl</br>" +
                "Estathe pesca o limone 33cl</br>" +
                "Birra artigianale ACME 33cl</br>" +
                "Ichnusa non filtrata 50cl</br>" +
                "Menabrea 33cl</br>" +
                "Corona Extra 33cl</br>" +
                "Herrnbrau Pils 50cl</br>" +
                "Herrnbrau Weisse 50cl</br>" +
                "Gin Tonic, Spritz</br>" +
                "Amari</br>",
        },
        {
            header: "WRHUB",
            content:
                "<strong>MEAT WRHUB</strong></br>Hamburger di carne Piemontese, salsa Hub Speicla, Grana Padano D.O.P., pomodoro, insalata" +
                "Coca Cola e Coca Zero 33cl</br>" +
                "Aranciata Amara S.Pellegrino 33cl</br>" +
                "Aranciata S.Pellegrino 33cl</br>" +
                "Chinotto S.Pellegrino 33cl</br>",
        },
    ];

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return (
        <div
            className="accordion container my-4"
            id="accordionPanelsStayOpenExample"
        >
            {toppings.map((section, index) => {
                return (
                    <div className="accordion-item my-3" key={index}>
                        <h2
                            className="accordion-header"
                            id={`panelsStayOpen-${index}`}
                        >
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#panelsStayOpen-collapse${index}`}
                                aria-expanded="false"
                                aria-controls={`panelsStayOpen-collapse${index}`}
                            >
                                {section.header}
                            </button>
                        </h2>
                        <div
                            id={`panelsStayOpen-collapse${index}`}
                            className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingOne"
                        >
                            <div
                                className="accordion-body"
                                dangerouslySetInnerHTML={{
                                    __html: section.content,
                                }}
                            ></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Dropdown;
