import React from "react";
import setinha from "./assets/images/setinha.png";

export default function Flashcards({
    index,
    question,
    answer,
    answered,
    setAnswered,
    bottomIcon,
    setBottomIcon,
    setDidntRemember
}) {
    const [isTapped, setIsTapped] = React.useState(true);
    const [optionAnswered, setOptionAnswered] = React.useState("");
    const [icon, setIcon] = React.useState("");
    const [tapped, setTapped] = React.useState(false);

    const choice = (option) => {
        setAnswered(answered + 1);

        if (option === "didnt-remember") {
            setOptionAnswered("wrong");
            setIcon("close-circle");
            setBottomIcon([...bottomIcon, "close-circle"]);
            setDidntRemember(true);

        } else if (option === "almost-didnt-remember") {
            setOptionAnswered("question");
            setIcon("help-circle");
            setBottomIcon([...bottomIcon, "help-circle"]);

        } else if (option === "zap") {
            setOptionAnswered("check");
            setIcon("checkmark-circle");
            setBottomIcon([...bottomIcon, "checkmark-circle"]);
        }

        setIsTapped(!isTapped);
        setTapped(!tapped);
    };

    return (
        <>
            {isTapped ? (
                <Frontface
                    index={index}
                    isTapped={isTapped}
                    setIsTapped={setIsTapped}
                    optionAnswered={optionAnswered}
                    icon={icon}
                    tapped={tapped} />
            ) : (
                <Backface
                    question={question}
                    answer={answer}
                    choice={choice} />
            )}
        </>
    );
}

function Frontface({
    index,
    isTapped,
    setIsTapped,
    optionAnswered,
    icon,
    tapped
}) {
    return (
        <div className="frontface center">
            <h1 className={`title ${optionAnswered}`}>Pergunta {index}</h1>
            {tapped ? (
                <ion-icon name={icon}></ion-icon>
            ) : (
                <ion-icon name="play-outline" onClick={() => { setIsTapped(!isTapped) }}></ion-icon>
            )}
        </div>
    );
}

function Backface({ question, answer, choice }) {
    const [isTapped, setIsTapped] = React.useState(true);

    return (
        <div className="backface">
            {isTapped ? (
                <>
                    <h1>{question}</h1>
                    <img src={setinha} onClick={() => { setIsTapped(!isTapped) }} alt="setinha" />
                </>
            ) : (
                <>
                    <h1>{answer}</h1>
                    <div className="options">
                        <div
                            className="didnt-remember center"
                            onClick={() => { choice("didnt-remember") }}>Não lembrei</div>
                        <div className="almost-didnt-remember center" onClick={() => { choice("almost-didnt-remember") }}>Quase não lembrei</div>
                        <div className="zap center" onClick={() => { choice("zap") }}>Zap!</div>
                    </div>
                </>
            )}
        </div>
    );
}