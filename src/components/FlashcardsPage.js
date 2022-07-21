import React from "react";
import Flashcards from "./Flashcards";
import Bottom from "./Bottom";

const flashcardsArray = [
    {
        question: "O que é JSX?",
        answer: "JSX é uma sintaxe para escrever HTML dentro do JS",
        tapped: false,
    },
    {
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces",
        tapped: false,
    },
    {
        question: "Componentes devem iniciar com __",
        answer: "letra maiúscula",
        tapped: false,
    },
    {
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões",
        tapped: false,
    },
    {
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma",
        tapped: false,
    },
    {
        question: " Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências",
        tapped: false,
    },
    {
        question: "PUsamos props para __",
        answer: "passar diferentes informações para componentes",
        tapped: false,
    },
    {
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
        tapped: false,
    },
]

const deckFlashcards = [];
function shuffle(){
    flashcardsArray.sort(() => Math.random() - 0.5);
    for(let i = 0; i < 4; i++) {
        deckFlashcards.push(flashcardsArray[i]);
    }
}
shuffle();

export default function FlashcardsPage() {
    return (
        <>
            <div className="top center">
                <img src="./images/logo-pequeno.png" alt="logo" />
                <h1>ZapRecall</h1>
            </div>

            <div className="flashcards center">
            {deckFlashcards.map((card, index) => (
                <Flashcards key={index} index={index+1} card={card} />
            ))}
            </div>

            <Bottom />
        </>
    );
}