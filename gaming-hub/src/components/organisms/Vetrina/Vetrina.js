import React from 'react';
import TitleVetrina from "../../atoms/TitleVetrina/TitleVetrina";
import DescriptionVetrina from "../../atoms/DescriptionVetrina/DescriptionVetrina";
import ImageVetrina from "../../atoms/ImageVetrina/ImageVetrina";

const Vetrina = ({data}) => {
    return (
        <section className="vetrina">
            <article className="flex-container justify-center align-center container" id={`${data.type}-container`}>
                <div className="text-container" id={`${data.type}-description`} >
                    <div className="text flex-container">
                        <TitleVetrina text={data.text} />
                        <DescriptionVetrina description={data.description}/>
                    </div>
                </div>
                <ImageVetrina imgSrc={data.image} alt="Menu" href="/menu"/>
            </article>
        </section>
    )
}

export default Vetrina;