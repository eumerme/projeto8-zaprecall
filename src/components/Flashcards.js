import React from "react";
import setinha from "./assets/images/setinha.png";

export default function Flashcards({ index, card, choice }) {
    console.log(card)
    const [isTapped, setIsTapped] = React.useState(true);


    return (
        <>
            {isTapped ? (
                <div className="frontface center">
                    <h1 className="title">Pergunta {index}</h1>
                    <ion-icon name="play-outline" onClick={() => { setIsTapped(false) }}></ion-icon>
                </div>
            ) : (
                <Backface card={card} choice={choice}/>
            )
            }
        </>
    );
}

function Backface({ card, choice }) {
    const [isTapped, setIsTapped] = React.useState(true);

    return (
        <div className="backface">
            {isTapped ? (
                <>
                    <h1>{card.question}</h1>
                    <img src={setinha} onClick={() => { setIsTapped(false) }} alt="setinha" />
                </>
            ) : (
                <>
                    <h1>{card.answer}</h1>
                    <div className="options">
                        <div className="didnt-remember center" onClick={() => { choice("didnt-remember") }}>Não lembrei</div>
                        <div className="almost-didnt-remember center" onClick={() => { choice("almost-didnt-remember") }}>Quase não lembrei</div>
                        <div className="zap center" onClick={() => { choice("zap") }}>Zap!</div>
                    </div>
                </>
            )}
        </div>
    )
}