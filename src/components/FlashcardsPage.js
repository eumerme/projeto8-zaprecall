import React from "react";
import Flashcards from "./Flashcards";
import Bottom from "./Bottom";
import smallLogo from "./assets/images/logo-pequeno.png";

const flashcardsArray = [
    {
        question: "O que é JSX?",
        answer: "JSX é uma sintaxe para escrever HTML dentro do JS",
    },
    {
        question: "O React é ...",
        answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
        question: "Componentes devem iniciar com ...",
        answer: "letra maiúscula",
    },
    {
        question: "Podemos colocar ... dentro do JSX",
        answer: "expressões",
    },
    {
        question: "O ReactDOM nos ajuda ...",
        answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
        question: "Usamos o npm para ...",
        answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
        question: "Usamos props para ...",
        answer: "passar diferentes informações para componentes",
    },
    {
        question: "Usamos estado (state) para ...",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
]

const deckFlashcards = [];
const deck = Math.round(flashcardsArray.length/2);
function shuffle() {
    flashcardsArray.sort(() => Math.random() - 0.5);
    for(let i = 0; i < deck; i++) {
        deckFlashcards.push(flashcardsArray[i]);
    }
}
shuffle();

export default function FlashcardsPage() {
    const [answered, setAnswered] = React.useState(0);
    const [bottomIcon, setBottomIcon] = React.useState([]);
    const [didntRemember, setDidntRemember] = React.useState(false);

    return (
        <>
            <div className="top center">
                <img src={smallLogo} alt="logo" />
                <h1>ZapRecall</h1>
            </div>

            <div className="flashcards center">
            {deckFlashcards.map((card, index) => (
                <Flashcards 
                    key={index}
                    index={index + 1}
                    question={card.question}
                    answer={card.answer}
                    answered={answered}
                    setAnswered={setAnswered}
                    bottomIcon={bottomIcon}
                    setBottomIcon={setBottomIcon}
                    setDidntRemember={setDidntRemember} />
            ))}
            </div>

            <Bottom
                answered={answered}
                bottomIcon={bottomIcon}
                deck={deck}
                didntRemember={didntRemember} />
        </>
    );
}