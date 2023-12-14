import React from 'react';

const Review = () => {
    return (
        <section className="vetrina flex-container" id="recensioni">
            <h2>Recensioni</h2>
            <article class="post-container flex-container container">
                <div class="recensione">
                    <div class="stelle">★★★★★</div>
                    <small>2 giorni fa</small>
                    <p>Bellissimo locale in centro a Voghera, a 5 minuti a piedi dalla stazione. Il posto è molto accogliente e il personale è stato gentilissimo, i panini sono veramente buoni, carne tenera e ingredienti di ottima qualità, le birre a disposizioni sono delle piccole perle provebienti da un birrificio artigianale lombardo. Torneremo di sicuro e lo consigliamo vivamente a tutto gli amanti degli hamburger della buona birra e del gaming!</p>
                </div>
                <div class="recensione">
                    <div class="stelle">★★★★★</div>
                    <small>1 settimana fa</small>
                    <p>Nonostante fossi di fretta mi hanno servito in tempi record un panino KILL molto buono.. bravi continuate così!</p>
                </div>
                <div class="recensione">
                    <div class="stelle">★★★★★</div>
                    <small>3 settimane fa</small>
                    <p>Era da un po' che volevo mangiare un hamburger diverso dal solito, così decisione dell'ultimo secondo entro da Hub...ci provo... Sarebbe gradita la prenotazione ma la ragazza riesce ad assegnarmi, al volo, un tavolo per due... Ci accomodiamo, ci presentano il menù spiegandoci come funziona, ordiniamo e attendiamo pochi minuti che l'ordine già arriva.... Che dire! Fantastico. Presentazione, gusto, materie prime utilizzate...perfette!!! La loro salsa hub special è davvero special! E per chi ama i videogames è il posto adatto!!! Predispongono di una saletta super attrezzata per il gioco online... Personale super gentile, disponibile, alla mano; locale pulito e ordinato. Che dire di più!!! CONSIGLIATISSIMO Prometto: la prossima volta prenoto con anticipo 😁</p>
                </div>
            </article>
        </section>
    );
};

export default Review;