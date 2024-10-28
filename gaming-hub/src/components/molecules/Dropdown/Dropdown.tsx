import { useEffect } from "react";
import { menu } from "../../../utils/LocalDB/menuToppings";
import DropdownElement from "../../atoms/DropdownElement/DropdownElement";
import "./styles.scss";

const Dropdown = () => {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

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
