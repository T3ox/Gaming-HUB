import React from "react";
import "./styles.scss";
import Props from "./type";

const DropdownElement: React.FC<Props> = ({ content, price }) => {
    return (
        <>
            {content.map((item, index) => {
                return (
                    <div
                        className="accordion-body-row d-flex align-items-end justify-content-between"
                        key={index}
                    >
                        <span
                            className="accordion-content"
                            dangerouslySetInnerHTML={{ __html: content[index] }}
                        />
                        <span
                            className="accordion-price"
                            dangerouslySetInnerHTML={{ __html: price[index] }}
                        />
                    </div>
                );
            })}
        </>
    );
};

export default DropdownElement;
