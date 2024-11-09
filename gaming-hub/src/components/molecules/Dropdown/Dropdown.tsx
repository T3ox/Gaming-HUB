import { useState } from "react";
import { menu } from "../../../utils/LocalDB/menuToppings";
import DropdownElement from "../../atoms/DropdownElement/DropdownElement";
import "./styles.scss";

const Dropdown = () => {
    const [openSections, setOpenSections] = useState<number[]>([]);

    // Funzione per aprire/chiudere una sezione indipendentemente
    const toggleSection = (index: number) => {
        setOpenSections(
            (prevOpenSections) =>
                prevOpenSections.includes(index)
                    ? prevOpenSections.filter((i) => i !== index) // Rimuove l'indice se la sezione è aperta (chiude)
                    : [...prevOpenSections, index] // Aggiunge l'indice se la sezione è chiusa (apre)
        );
    };

    return (
        <div
            className="accordion container my-4"
            id="accordionPanelsStayOpenExample"
        >
            {menu.map((section, index) => {
                return (
                    <div className="accordion-item my-3" key={index}>
                        <h2
                            className="accordion-header"
                            id={`panelsStayOpen-${index}`}
                        >
                            <button
                                className={`accordion-button ${
                                    openSections.includes(index)
                                        ? ""
                                        : "collapsed"
                                }`}
                                type="button"
                                onClick={() => toggleSection(index)}
                                //data-bs-toggle="collapse"
                                //data-bs-target={`#panelsStayOpen-collapse${index}`}
                                //aria-expanded="false"
                                //aria-controls={`panelsStayOpen-collapse${index}`}
                                aria-expanded={openSections.includes(index)}
                                aria-controls={`collapse-${index}`}
                            >
                                {section.header}
                            </button>
                        </h2>
                        <div
                            id={`panelsStayOpen-collapse${index}`}
                            className={`accordion-collapse collapse ${
                                openSections.includes(index) ? "show" : ""
                            }`}
                            //aria-labelledby="panelsStayOpen-headingOne"
                        >
                            <div className="accordion-body d-flex flex-column">
                                <DropdownElement
                                    content={section.content}
                                    price={section.prezzo}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Dropdown;
