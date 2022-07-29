import sad from "./assets/images/sad.png";
import party from "./assets/images/party.png";

function Message({ didntRemember }) {
    return (
        (didntRemember) ? (
            <>
                <div className="result">
                    <img src={sad} alt="sad" />
                    <h1>Putz...</h1>
                </div>
                <div className="message">Ainda faltam alguns... Mas não desanime!</div>
            </>
        ) : (
            <>
                <div className="result">
                    <img src={party} alt="party" />
                    <h1>Parabéns!</h1>
                </div>
                <div className="message">Você não esqueceu de nenhum flashcard!</div>
            </>
        )
    );
}

export default function Bottom({ answered, bottomIcon, deck, didntRemember, startPage, setStartPage }) {
    return (
        <div className="bottom center">
            {deck === answered ? (
                <Message didntRemember={didntRemember} />
            ) : ("")}
            <p>{answered}/{deck} CONCLUÍDOS</p>
            <div className="icons">
                {bottomIcon.map((icon, index) => (<ion-icon name={icon} key={index}></ion-icon>))}
            </div>
            {deck === answered ? (
                <div className="restart-button center" onClick={() => { setStartPage(!startPage) }}>Reiniciar Recall</div>
            ) : ("")}
        </div>
    );
}