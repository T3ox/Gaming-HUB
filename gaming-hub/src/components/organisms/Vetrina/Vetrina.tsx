import React from 'react';
import TitleVetrina from "../../atoms/VetrinaTitle/TitleVetrina";
import DescriptionVetrina from "../../atoms/VetrinaDescription/DescriptionVetrina";
import ImageVetrina from "../../atoms/VetrinaImage/ImageVetrina";
import Props from "./types";

const Vetrina: React.FC<Props> = ({type, text, description, image}) => {
    return (
        <section className="vetrina">
            <article className="flex-container justify-center align-center container" id={`${type}-container`}>
                <div className="text-container" id={`${type}-description`} >
                    <div className="text flex-container">
                        <TitleVetrina text={text} />
                        <DescriptionVetrina description={description}/>
                    </div>
                </div>
                <ImageVetrina imgSrc={image} alt="Menu" href="/menu"/>
            </article>
        </section>
    )
}



export default Vetrina;