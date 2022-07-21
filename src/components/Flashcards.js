export default function Flashcards({index, card}) {
    console.log(card)
    return (
        <>
            <div className="flashcard-face center">
                <h1 className="title">Pergunta {index}</h1>
                <ion-icon name="play-outline"></ion-icon>
            </div>

            {/* <div className="flashcard-backface">
                <h1>O que é JSX?</h1>
                <img src="./images/setinha.png" alt="logo" />

                <h1>JSX é uma sintaxe para escrever HTML dentro do JS</h1>
                <div className="options">
                    <div className="didnt-remember center">Não lembrei</div>
                    <div className="almost-didnt-remember center">Quase não lembrei</div>
                    <div className="zap center">Zap!</div>
                </div>
            </div> */}
        </>
    );
}