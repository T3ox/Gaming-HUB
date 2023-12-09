import React from 'react';
import TitleVetrina from "../../atoms/TitleVetrina/TitleVetrina";
import DescriptionVetrina from "../../atoms/DescriptionVetrina/DescriptionVetrina";
import ImageVetrina from "../../atoms/ImageVetrina/ImageVetrina";
import img from "./season4.jpg"

const Vetrina = ({type}) => {
    return (
        <section className="vetrina">
            <article className="flex-container justify-center align-center container" id={`${type}-container`}>
                <div className="text-container" id={`${type}-description`} >
                    <div className="text flex-container">
                        <TitleVetrina text="Menu" />
                        <DescriptionVetrina description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc malesuada quam lorem, a gravida mi viverra id.\n Praesent eget dignissim diam.
                        Morbi efficitur in odio et laoreet. Quisque venenatis placerat vehicula.\n
                        Ab autem blanditiis, delectus dolorem excepturi, ipsum iste minima,
                        molestias nisi odit quaerat quo." />
                    </div>
                </div>
                <ImageVetrina imgSrc={img} alt="Menu" href="/menu"/>
            </article>
        </section>
    )
}

export default Vetrina;